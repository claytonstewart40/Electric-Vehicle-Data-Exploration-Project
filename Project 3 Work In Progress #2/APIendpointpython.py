# Create an API endpoint that accepts a year parameter and retrieves data for the selected year 
# from the database.

from flask import Flask, request, jsonify, render_template
import psycopg2  # Assuming you're using PostgreSQL

app = Flask(__name__)

# Define database connection credentials
db_connection = {
    'dbname': 'Project_3',
    'user': 'postgres',
    'password': 'postgres',
    'host': 'localhost',
    'port': '5432'
}
@app.route('/')
def homepage():
    return render_template('index.html')


# API endpoint to retrieve data for the selected year
selected_year = None
@app.route('/api/data', methods=['GET'])
def get_data_for_year():
    selected_year = request.args.get('year')  # Get the 'year' parameter from the request
    print(selected_year)
     # Check if selected_year is None or empty before using it
    if selected_year is None or selected_year == '':
        return jsonify({'error': 'Year parameter is missing or empty'})  # Return error JSON response

    # Establish a database connection
    conn = psycopg2.connect(**db_connection)
    cursor = conn.cursor()

   # Query the database for data based on the selected year
    cursor.execute("SELECT * FROM electric_vehicle_population_data WHERE modelyear = %s", (selected_year,))
    data = cursor.fetchall()

   # Close the cursor and connection
    cursor.close()
    conn.close()

    # After processing the data, return a valid response
    return jsonify({'result': 'Data for the year {}'.format(selected_year), 'data': data})

if __name__ == '__main__':
    app.run(debug=True)  # Run the Flask app 
    #take a look at the flask activity notes to see how to run it properly.

    #Next step load the d3.json.  Look up how to do a pie chart with d3, and add it to the script.  Need to create a route that renders a html template, 