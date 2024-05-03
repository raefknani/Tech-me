import json
from flask import Flask, request
from flask_cors import CORS
from flask import send_from_directory


app = Flask(__name__)
CORS(app)
# Load the JSON data
with open('laptops.json', 'r') as f:
    data = json.load(f)

# Extract search format from data
search_format = data.get('search_format', {})

@app.route('/public/<path:path>')
def send_report(path):
    return send_from_directory('public', path)


@app.route('/submit', methods=['POST'])
def submit():
    # Get the user's input
    user_input = request.form.get('description', '')
    UserInput = user_input.lower()

    laptop_scores = {}
    checked_laptop = []

    # Load the JSON data
    with open('laptops.json', 'r') as f:
        data = json.load(f)
    for laptop in data['laptops']:
        max = 0
        UserInput = user_input.lower()
       
        
        laptop_check = [
            laptop['marque'].lower(),
            laptop['processeur']['marque_processeur'].lower(),
            laptop['processeur']['generation_processeur'].lower(),
            laptop['ram'].lower(),
            laptop['stokage'].lower(),
            laptop['taille_ecran'].lower(),
            laptop['os'].lower(),
            ]
        
        
        for i in range(len(laptop_check)):
            if (laptop_check[i] in UserInput):
                max += 1
            if max > 0:
                checked_laptop.append(laptop["id"])
    # remove repeated items and replace them with unique items
    checked_laptop = list(set(checked_laptop))
    

        
            
   

    return json.dumps(checked_laptop)

if __name__ == '__main__':
    app.run(port=5000, debug=True)