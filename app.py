from flask import Flask, request, render_template
import pandas as pd
from catboost import CatBoostRegressor

app = Flask(__name__)

# Load your CatBoost model
model = CatBoostRegressor()
model.load_model('catboost_model.cbm')

@app.route('/', methods=['GET', 'POST'])
def predict():
    prediction = None  # Initialize prediction variable
    if request.method == 'POST':
        yearCreation = int(request.form.get('yearCreation', 0))
        period = request.form.get('period', '')
        movement = request.form.get('movement', '')
        is_signed = int(request.form.get('is_signed', '0'))
        dated = int(request.form.get('dated', '0'))
        right = int(request.form.get('right', '0'))
        left = int(request.form.get('left', '0'))
        excellent = int(request.form.get('excellent', '0'))
        direct_from_publisher = int(request.form.get('direct_from_publisher', '0'))
        frame_abrasion = int(request.form.get('frame_abrasion', '0'))
        original_condition = int(request.form.get('original_condition', '0'))
        very_good = int(request.form.get('very_good', '0'))
        not_examined = int(request.form.get('not_examined', '0'))
        tears = int(request.form.get('tears', '0'))
        occasional_marks = int(request.form.get('occasional_marks', '0'))
        oxidation = int(request.form.get('oxidation', '0'))
        scratches = int(request.form.get('scratches', '0'))

        # Prepare data for prediction
        predicted_price = predict_price(yearCreation, period, movement, is_signed, dated, right, left, excellent, direct_from_publisher, frame_abrasion, original_condition, very_good, not_examined, tears, occasional_marks, oxidation, scratches)
        prediction = int(predicted_price[0])
        prediction1 = max(round(predicted_price[0] - 10000, -4), 0)
        prediction2 = max(round(predicted_price[0] + 10000, -4), 0)



    # Pass the prediction result to the template
    return render_template('regression.html', prediction=prediction)

def predict_price(yearCreation, period, movement, is_signed, dated, right, left, excellent, direct_from_publisher, frame_abrasion, original_condition, very_good, not_examined, tears, occasional_marks, oxidation, scratches):
    synthetic_data = {
        'yearCreation': yearCreation,
        'period': period,
        'movement': movement,
        'is_signed': is_signed,
        'dated': dated,
        'right': right,
        'left': left,
        'excellent': excellent,
        'direct_from_publisher': direct_from_publisher,
        'frame_abrasion': frame_abrasion,
        'original_condition': original_condition,
        'very_good': very_good,
        'not_examined': not_examined,
        'tears': tears,
        'occasional_marks': occasional_marks,
        'oxidation': oxidation,
        'scratches': scratches
    }
    df_synthetic = pd.DataFrame([synthetic_data])
    predicted_price = model.predict(df_synthetic)
    return predicted_price
    

if __name__ == '__main__':
    app.run(debug=True)
