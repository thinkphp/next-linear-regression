# Linear Regression Web Application

This web application demonstrates a simple linear regression model with a Flask backend for calculations and a Next.js frontend for visualization. Users can input their X and Y data points, and the application will calculate the regression line and display the results graphically.

![Linear Regression](https://github.com/thinkphp/next-linear-regression/blob/main/Screenshot%20from%202025-02-14%2013-30-13.png?raw=true)

## Features

- REST API for linear regression calculations
- Real-time data visualization with Chart.js
- Interactive user interface for data input
- Cross-domain request support
- Responsive design

## Project Structure

```
linear-regression-project/
├── backend/
│   └── app.py
└── frontend/
    └── page.js
```

## Backend (Flask)

The backend is built with Flask and provides an endpoint for calculating linear regression coefficients.

### Dependencies

- Flask
- Flask-CORS
- NumPy

### API Endpoints

#### POST /regression

Calculates linear regression based on the provided X and Y values.

**Request Body:**
```json
{
  "x": [1, 2, 3, 4, 5],
  "y": [2, 3, 5, 7, 11]
}
```

**Response:**
```json
{
  "m": 2.2,
  "b": -0.4,
  "predictions": [1.8, 4.0, 6.2, 8.4, 10.6]
}
```

Where:
- `m`: Slope of the regression line
- `b`: Y-intercept of the regression line
- `predictions`: Predicted Y values for each X input

## Frontend (Next.js)

The frontend is built with Next.js and uses Chart.js for data visualization.

### Dependencies

- Next.js
- React
- Chart.js
- react-chartjs-2
- Axios

### Features

- Input fields for X and Y values (comma-separated)
- Button to trigger regression calculation
- Display of the regression equation
- Interactive chart showing both original data points and regression line

## How to Run

### Backend Setup

1. Navigate to the backend directory
2. Install required packages:
   ```
   pip install flask flask-cors numpy
   ```
3. Run the Flask application:
   ```
   python app.py
   ```
   The server will start on http://127.0.0.1:5000

### Frontend Setup

1. Navigate to the frontend directory
2. Install required packages:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
   The application will be available at http://localhost:3000

## Usage

1. Open the web application in your browser
2. Enter comma-separated X values in the first input field (e.g., "1,2,3,4,5")
3. Enter corresponding Y values in the second input field (e.g., "2,3,5,7,11")
4. Click the "Calculează Regresia" (Calculate Regression) button
5. View the regression equation and the chart displaying both your data points and the calculated regression line

## How It Works

1. When you submit your data, the frontend sends it to the Flask backend
2. The backend calculates the slope (m) and y-intercept (b) using the least squares method
3. The calculated coefficients and predictions are returned to the frontend
4. The frontend displays the regression equation and renders a chart showing both the original data points and the regression line

## Limitations

- The application does not handle non-numeric inputs
- There is no data validation or error handling for invalid inputs
- The visualization is basic and does not include confidence intervals or other advanced statistics

## Future Improvements

- Add input validation
- Support for multiple regression models
- Export functionality for the results
- More detailed statistical analysis
- Responsive design for mobile devices

## License

This project is open-source and available under the MIT License.
