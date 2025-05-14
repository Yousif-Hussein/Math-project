
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';

function LinearExamples() {
  const [m, setM] = useState(1);  // Slope
  const [b, setB] = useState(0);  // Y-intercept
  const [x, setX] = useState(3);
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleFlip = () => {
    setIsFlipped(true);
    setTimeout(() => {
      navigate("/linear/quiz");
      setIsFlipped(false);
    }, 600); // Duration of the flip animation
  };

  // Linear Equation Calculation: y = mx + b
  const calculateLinear = (m, b, x) => m * x + b;

  const data = Array.from({ length: 10 }, (_, i) => ({
    x: i,
    y: calculateLinear(m, b, i),
  }));

  const handleChange = (setter) => (e) => setter(Number(e.target.value));

  return (
    <div className={`ExExamples ${isFlipped ? "flipped" : ""}`}>
      <div className="ExConcepts-content">
        <h1>Linear Equation Example</h1>

        <div className="inputs">
          <label>
            Slope (m): <input type="number" value={m} onChange={handleChange(setM)} />
          </label>
          <label>
            Y-Intercept (b): <input type="number" value={b} onChange={handleChange(setB)} />
          </label>
          <label>
            X Value: <input type="number" value={x} onChange={handleChange(setX)} />
          </label>
        </div>

        <h2>Calculation:</h2>
        <p>
          y = {m}x + {b} = {calculateLinear(m, b, x)}
        </p>

        <h2>Graphical Representation:</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="y" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>

        <button className="flip-btn" onClick={handleFlip}>
          View Quiz
        </button>
      </div>
    </div>
  );
}

export default LinearExamples;
