import pandas as pd
from catboost import CatBoostRegressor

# Function to predict price
def predict_price(yearCreation, period, movement, is_signed, dated, right, left, excellent, direct_from_publisher, frame_abrasion, original_condition, very_good, not_examined, tears, occasional_marks, oxidation, scratches):
    # Dictionary with the input values
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

    # Create a dataframe with the synthetic data
    df_synthetic = pd.DataFrame([synthetic_data])

    # Predict the price using the loaded model
    predicted_price = model.predict(df_synthetic)

    # Return the predicted price
    return predicted_price

# Load your CatBoost model
model = CatBoostRegressor()
model.load_model('catboost_model.cbm')

# Example predictions
predicted_price_1 = predict_price(2009, 'Contemporary', 'Abstract', 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0)
print("Predicted Price for Dataset 1:", predicted_price_1)

predicted_price_2 = predict_price(2005, 'Modern', 'Impressionism', 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0)
print("Predicted Price for Dataset 2:", predicted_price_2)
