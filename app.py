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
        # Extract data from form
        yearCreation = request.form.get('yearCreation')
        period = request.form.get('period')
        movement = request.form.get('movement')
        is_signed = request.form.get('is_signed')
        dated = request.form.get('dated')
        right = request.form.get('right')
        left = request.form.get('left')
        excellent = request.form.get('excellent')
        direct_from_publisher = request.form.get('direct_from_publisher')
        frame_abrasion = request.form.get('frame_abrasion')
        original_condition = request.form.get('original_condition')
        very_good = request.form.get('very_good')
        not_examined = request.form.get('not_examined')
        tears = request.form.get('tears')
        occasional_marks = request.form.get('occasional_marks')
        oxidation = request.form.get('oxidation')
        scratches = request.form.get('scratches')

        # Convert strings to appropriate types
        try:
            yearCreation = int(yearCreation)
            is_signed = int(is_signed)
            dated = int(dated)
            right = int(right)
            left = int(left)
            excellent = int(excellent)
            direct_from_publisher = int(direct_from_publisher)
            frame_abrasion = int(frame_abrasion)
            original_condition = int(original_condition)
            very_good = int(very_good)
            not_examined = int(not_examined)
            tears = int(tears)
            occasional_marks = int(occasional_marks)
            oxidation = int(oxidation)
            scratches = int(scratches)
        except ValueError:
            return "Error: Please ensure all fields are filled out correctly."

        # Predict price
        predicted_price = predict_price(yearCreation, period, movement, is_signed, dated, right, left, excellent, direct_from_publisher, frame_abrasion, original_condition, very_good, not_examined, tears, occasional_marks, oxidation, scratches)
        predicted_price_value = float(predicted_price[0])
        
        # Instead of returning it directly, pass it to the template
        prediction = predicted_price_value

    # Always return the template, with prediction variable
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
