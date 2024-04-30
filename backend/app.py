from flask import jsonify

@app.route('/submit', methods=['POST'])
def submit():
    # Load the JSON data
    with open('laptops.json', 'r') as f:
        data = json.load(f)

    # Get the user's input
    user_input = request.form.get('description')
    user_input = ' '.join(user_input.split())

    # Compare the user's input with each laptop
    results = []
    for laptop in data['laptops']:
        # Assuming the user's input is a string of keywords separated by spaces
        keywords = user_input.split()
        compatibility_count = 0
        for keyword in keywords:
            if keyword in laptop.values():
                compatibility_count += 1

        # If the laptop is compatible, add its ID and compatibility count to the results
        if compatibility_count > 0:
            results.append({
                'id': laptop['id'],
                'compatibility_count': compatibility_count
            })

    # Return the results as a JSON response
    return jsonify(results), 200