from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np

app = Flask(__name__)
CORS(app)  # Permite cererile din alte domenii

@app.route('/regression', methods=['POST'])
def regression():
    data = request.get_json()
    x = np.array(data['x']).reshape(-1, 1)
    y = np.array(data['y']).reshape(-1, 1)

    # Calcularea coeficienților
    x_mean = np.mean(x)
    y_mean = np.mean(y)
    m = np.sum((x - x_mean) * (y - y_mean)) / np.sum((x - x_mean)**2)
    b = y_mean - m * x_mean

    predictions = (m * x + b).flatten().tolist()
    
    return jsonify({
        "m": float(m),
        "b": float(b),
        "predictions": predictions
    })

if __name__ == '__main__':
    app.run(debug=True)

