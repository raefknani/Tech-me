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
    user_input = request.form.get('description', '').lower() + " "
    print("user :",user_input)

    def combine_spects(animator_func, user_input):
        student_spects = animator_func(user_input)
        return student_spects
    

    def student_spects(txt):
        if "etudiant" in txt:
            return ["core i5","Ryzen 5","8GB"," 256GB","13","15","Windows 10","mac","apple","SSD"]
        else:
            return []    
    def teacher_spects(txt):
        if "professeur" in txt:
            return ["core i5","Ryzen 5","8GB"," 256GB","13","15","Windows 10","mac","apple","SSD"]
        else:
            return []
    def software_engineer_spects(txt):
        if "software" in txt:
            return ["core i5","Ryzen 5","8GB"," 256GB","13","15","Windows 10","mac","apple","SSD"]
        else:
            return []
    def doctor_spects(txt):
        if "docteur" in txt:
            return ["core i5","Ryzen 5","8GB"," 256GB","13","15","Windows 10","mac","apple","SSD"]
        else:
            return []
    def graphic_designer_spects(txt):
        if "designer" in txt:
            return ["Core i7","Ryzen 7","16GB"," 512GB","15","17","Windows 10","mac","apple","SSD"]
        else:
            return []
    def architect_spects(txt):
        if "architect" in txt:
            return ["Core i7","Ryzen 7","16GB"," 512GB","15","17","Windows 10","mac","apple","SSD"]
        else:
            return []
    def composer_spects(txt):
        if "composer" in txt:
            return ["Core i7","Ryzen 7","16GB","1TB","15","17","Windows 10","mac","apple","SSD"]
        else:
            return []
    def gamer_spects(txt):
        if "docteur" in txt:
            return ["Core i7","Ryzen 7","16GB"," 512GB","15","17","Windows 10","SSD","GTX 1660","RTX 2060","RTX 2070","RTX 2080"]
        else:
            return []
    def animator_spects(txt):   
        if "animator" in txt:
            return ["Core i7","Ryzen 7","32GB"," 512GB","15","17","mac","apple","Windows 10","SSD","GTX 1660","RTX 2060","RTX 2070","RTX 2080"]
        else:
            return []
    def Photographer_spects(txt):   
        if "photo" or "photgrapheur" in txt:
            return ["Core i7","Ryzen 7","16GB","1TB","15","17","mac","apple","Windows 10","SSD","GTX 1660","RTX 2060","RTX 2070","RTX 2080"]
        else:
            return []
        

    
    final_spects = (combine_spects(student_spects, user_input)+
                    combine_spects(teacher_spects, user_input)+
                    combine_spects(software_engineer_spects, user_input)+
                    combine_spects(doctor_spects, user_input)+ 
                    combine_spects(graphic_designer_spects, user_input)+
                    combine_spects(architect_spects, user_input)+ 
                    combine_spects(composer_spects, user_input) +
                    combine_spects(gamer_spects, user_input)  +
                    combine_spects(animator_spects, user_input) +
                    combine_spects(Photographer_spects, user_input) 
                    )    
    print("final_spects :",final_spects)



    def text_finale(final_spects):
        textfinale = ""
        for i in range(len(final_spects)):
            textfinale += final_spects[i] + " "
        return textfinale
   
    user_input = text_finale(final_spects)
    user_input = set(user_input.split())

 
    print(student_spects(final_spects))
    print("final_user_input :",user_input)
    checked_laptop = []

    # Load the JSON data
    with open('laptops.json', 'r') as f:
        data = json.load(f)
    for laptop in data['laptops']:
        max = 0
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
            if (laptop_check[i] in user_input):
                max += 1
            if max > 0:
                checked_laptop.append(laptop["id"])
    # remove repeated items and replace them with unique items
    checked_laptop = list(set(checked_laptop))
    print("server :",checked_laptop)

        
            
   

    return json.dumps(checked_laptop)


if __name__ == '__main__':
    app.run(port=5000, debug=True)