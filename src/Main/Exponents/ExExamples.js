import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';
function ExExamples() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  const [x, setX] = useState(3);
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleFlip = () => {
    setIsFlipped(true);

    setTimeout(() => {
      navigate("/exponents/quiz");
      setIsFlipped(false);
    }, 600);
  };
  const calculateExponential = (a, b, x) => a * Math.pow(b, x);

  const data = Array.from({ length: 10 }, (_, i) => ({
    x: i,
    y: calculateExponential(a, b, i),
  }));

  const handleChange = (setter) => (e) => setter(Number(e.target.value));

  return (
    <div className={`ExExamples ${isFlipped ? "flipped" : ""}`}>2
     <div className="ExConcepts-content">
      <h1>Exponential Function Example</h1>
      <div className="inputs">
        <label>
          a: <input type="number" value={a} onChange={handleChange(setA)} />
        </label>
        <label>
          b: <input type="number" value={b} onChange={handleChange(setB)} />
        </label>
        <label>
          x: <input type="number" value={x} onChange={handleChange(setX)} />
        </label>
      </div>

      <h2>Calculation:</h2>
      <p>y = {a} * ({b})^{x} = {calculateExponential(a, b, x)}</p>

      <h2>Graphical Representation:</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="y" stroke="#82ca9d" />
          <Line type="monotone" dataKey="x" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      <button className="flip-btn" onClick={handleFlip}>
          View Quiz
       </button>
       </div>
    </div>
  );
}

export default ExExamples;

