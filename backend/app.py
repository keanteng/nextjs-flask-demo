from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import logging

app = Flask(__name__)
CORS(app)

# Load the trained model
model = joblib.load('model/spaceship_titanic_model.pkl')

# Define the expected features (Cabin removed)
expected_features = [
    'HomePlanet', 'CryoSleep', 'Destination', 'Age', 'VIP',
    'RoomService', 'FoodCourt', 'ShoppingMall', 'Spa', 'VRDeck'
]

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the JSON data from the request
        data = request.get_json()

        # Log the received data
        app.logger.info(f"Received data: {data}")

        # Check if all expected features are present
        if not all(feature in data for feature in expected_features):
            return jsonify({'error': 'Invalid input data'}), 400

        # Preprocess the data
        # Convert HomePlanet
        home_planet_mapping = {'Mars': 0, 'Jupiter': 1, 'Moon': 2}
        data['HomePlanet'] = home_planet_mapping.get(data['HomePlanet'], -1)  # Default to -1 if not found

        # Convert CryoSleep
        cryo_sleep_mapping = {'Yes': 0, 'No': 1}
        data['CryoSleep'] = cryo_sleep_mapping.get(data['CryoSleep'], -1)  # Default to -1 if not found

        # Convert Destination
        destination_mapping = {'Demon': 0, 'Heaven': 1, 'Elf': 2, 'Marine': 3}
        data['Destination'] = destination_mapping.get(data['Destination'], -1)  # Default to -1 if not found

        # Convert VIP
        vip_mapping = {'Yes': 0, 'No': 1}
        data['VIP'] = vip_mapping.get(data['VIP'], -1)  # Default to -1 if not found

        # Convert the JSON data to a DataFrame
        input_data = pd.DataFrame([data])

        # Ensure the input data has the same columns as the training data
        # This might require some preprocessing depending on your data
        # For example, if you used pd.get_dummies, you need to apply the same transformation
        input_data = pd.get_dummies(input_data)

        # Align the input data with the model's expected input
        input_data = input_data.reindex(columns=model.feature_names_in_, fill_value=0)

        # Make a prediction
        prediction = model.predict(input_data)

        # Convert the prediction to a boolean
        prediction_bool = bool(prediction[0])

        # Return the prediction as JSON
        return jsonify({'Transported': prediction_bool})

    except Exception as e:
        app.logger.error(f"Error: {str(e)}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    logging.basicConfig(level=logging.INFO)
    app.run(debug=True)