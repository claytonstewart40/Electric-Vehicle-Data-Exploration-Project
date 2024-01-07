# Create an API endpoint that accepts a year parameter and retrieves data for the selected year 
# from the database.

from flask import Flask, request, jsonify, render_template
import psycopg2
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

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

# Updated API endpoint to include error handling
@app.route('/api/data', methods=['GET'])
def get_data_for_year():
    selected_year = request.args.get('year')

    # Check if the 'year' parameter is provided
    if not selected_year:
        return jsonify({'error': 'Year parameter is missing'}), 400

    try:
        # Database connection and query execution
        conn = psycopg2.connect(**db_connection)
        cursor = conn.cursor()

        query = """
        SELECT make, model, modelyear, COUNT(vin_1_to_10) as total
        FROM electric_vehicle_population_data
        WHERE modelyear = %s
        GROUP BY make, model, modelyear
        ORDER BY total DESC
        LIMIT 10;
        """
        cursor.execute(query, (int(selected_year),))
        data = cursor.fetchall()

        # Check if data is returned from the query
        if not data:
            return jsonify({'error': 'No data found for the selected year'}), 404

        cursor.close()
        conn.close()

        # Returning the fetched data
        return jsonify({'result': 'Top 10 EV makes and models for the year {}'.format(selected_year), 'data': data})

    except psycopg2.DatabaseError as e:
        # Handling database related errors
        return jsonify({'error': 'Database error: ' + str(e)}), 500
    except Exception as e:
        # Handling any other exceptions
        return jsonify({'error': 'An error occurred: ' + str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True) 