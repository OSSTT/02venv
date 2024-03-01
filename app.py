from flask import Flask, render_template, request, jsonify
from flask.helpers import send_file

app = Flask(__name__, static_url_path='/', static_folder='web')

@app.route("/")
def indexPage():
    return send_file("./web/index.html")

@app.route('/convert', methods=['POST'])
def convert():
    try:
        data = request.get_json()
        kg_value = float(data['kg'])
        lbs_value = kg_to_lbs(kg_value)
        return jsonify({'lbs': lbs_value})
    except Exception as e:
        return jsonify({'error': str(e)})

def kg_to_lbs(kg):
    return kg * 2.20462

if __name__ == '__main__':
    app.run(debug=True)

