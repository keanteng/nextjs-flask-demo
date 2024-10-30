import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib

# Step 1: Load the data
print("Loading data...")
data = pd.read_csv('data/traincleaned.csv')

# Step 2: Preprocess the data
print("Preprocessing data...")
# Drop the PassengerId column
data = data.drop(columns=['PassengerId', 'Name', 'Cabin'])

# Convert CryoSleep and VIP columns to binary (0 and 1)
data['CryoSleep'] = data['CryoSleep'].astype(int)
data['VIP'] = data['VIP'].astype(int)

# Assuming 'Transported' is the target column and the rest are features
X = data.drop(columns=['Transported'])
y = data['Transported']

# Convert target column to binary (0 and 1)
y = y.astype(int)

# Handle categorical variables if any (example using pd.get_dummies)
X = pd.get_dummies(X)

# Step 3: Split the data
print("Splitting data into training and testing sets...")
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Step 4: Train the model
print("Training the model...")
model = RandomForestClassifier(random_state=42)
model.fit(X_train, y_train)

# Step 5: Evaluate the model
print("Evaluating the model...")
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy:.2f}')

# Step 6: Save the model
print("Saving the model...")
joblib.dump(model, 'model/spaceship_titanic_model.pkl')
print("Model saved as 'spaceship_titanic_model.pkl'")