'use client';
import { useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default function Home() {
  const [xValues, setXValues] = useState("");
  const [yValues, setYValues] = useState("");
  const [chartData, setChartData] = useState(null);
  const [m, setM] = useState(null);
  const [b, setB] = useState(null);

  const handleSubmit = async () => {
    const xArray = xValues.split(",").map(Number);
    const yArray = yValues.split(",").map(Number);

    try {
      const response = await axios.post("http://127.0.0.1:5000/regression", {
        x: xArray,
        y: yArray,
      });

      setM(response.data.m);
      setB(response.data.b);

      setChartData({
        labels: xArray,
        datasets: [
          {
            label: "Actual Data",
            data: yArray,
            borderColor: "blue",
            backgroundColor: "blue",
            pointRadius: 5,
          },
          {
            label: "Predicted Data",
            data: response.data.predictions,
            borderColor: "red",
            backgroundColor: "red",
            borderWidth: 2,
          },
        ],
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Regresie Liniară</h1>
      <div>
        <label>Valori X: </label>
        <input
          type="text"
          value={xValues}
          onChange={(e) => setXValues(e.target.value)}
          placeholder="ex: 1,2,3,4,5"
        />
      </div>
      <div>
        <label>Valori Y: </label>
        <input
          type="text"
          value={yValues}
          onChange={(e) => setYValues(e.target.value)}
          placeholder="ex: 2,3,5,7,11"
        />
      </div>
      <button onClick={handleSubmit} style={{ margin: "10px", padding: "5px" }}>
        Calculează Regresia
      </button>

      {m !== null && b !== null && (
        <p>
          Ecuația regresiei: <strong>y = {m.toFixed(2)}x + {b.toFixed(2)}</strong>
        </p>
      )}

      {chartData && (
        <div style={{ width: "600px", margin: "auto" }}>
          <Line data={chartData} />
        </div>
      )}
    </div>
  );
}

