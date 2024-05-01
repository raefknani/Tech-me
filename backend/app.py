import json
from flask import Flask, request

app = Flask(__name__)

# Load the JSON data
with open('laptops.json', 'r') as f:
    data = json.load(f)

# Extract search format from data
search_format = data.get('search_format', {})

@app.route('/submit', methods=['POST'])
def submit():
    # Get the user's input
    user_input = request.form.get('description').lower()
    user_input = user_input.split()

    laptop_scores = {}
    checked_laptop = []

    # Load the JSON data
    with open('laptops.json', 'r') as f:
        data = json.load(f)
    for laptop in data['laptops']:
        max = 0
        UserInput = user_input
        laptop_identificator = laptop['id']
        

        laptop_check = [
            laptop['marque'],
            laptop['processeur']['marque_processeur'],
            laptop['processeur']['generation_processeur'],
            laptop['ram'],
            laptop['stokage'],
            laptop['taille_ecran'],
            laptop['os']
            ]
        for i in range(len(laptop_check)):
            if laptop_check[i] in UserInput:
                max += 1
                if max > 0:
                    checked_laptop.append(laptop_identificator)
    print(checked_laptop)

    #     print(laptop_check)
    # for i in range(len(laptop_check)):
    #     if laptop_check[i] in UserInput:
    #         max += 1
    #         if max > 0:
    #             checked_laptop.append(laptop_identificator)
    
    # print(checked_laptop)
        





        # if marque in UserInput:
        #     max += 1
        # if marque_processeur in UserInput:
        #     max += 1
        # if generation_processeur in UserInput:
        #     max += 1
        # if ram in UserInput:
        #     max += 1
        # if stokage in UserInput:
        #     max += 1
        # if taille_ecran in UserInput:
        #     max += 1
        # if os in UserInput:
        #     max += 1
        # output = "Input request : " + str(user_input) + " | degre de corresponance = " + str(max) + " | laptop ID : " + str(indetificator)
        # print(output)

    return json.dumps(laptop_scores)

if __name__ == '__main__':
    app.run(port=5000, debug=True)