
import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useNavigate } from "react-router-dom";

function QuadraticExamples() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(-3);
  const [c, setC] = useState(2);
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleFlip = () => {
    setIsFlipped(true);
    setTimeout(() => {
      navigate("/quadratic/quiz");
      setIsFlipped(false);
    }, 600);
  };

  const calculateY = (x) => a * Math.pow(x, 2) + b * x + c;

  // Vertex calculation
  const h = -b / (2 * a);
  const k = calculateY(h);

  // Roots calculation using the quadratic formula
  const discriminant = Math.pow(b, 2) - 4 * a * c;
  const root1 = discriminant >= 0 ? (-b + Math.sqrt(discriminant)) / (2 * a) : "No Real Root";
  const root2 = discriminant >= 0 ? (-b - Math.sqrt(discriminant)) / (2 * a) : "No Real Root";

  // Data for graph
  const data = Array.from({ length: 21 }, (_, i) => {
    const x = i - 10; // Range from -10 to 10
    return {
      x,
      y: calculateY(x),
    };
  });

  const handleChange = (setter) => (e) => setter(Number(e.target.value));

  return (
    <div className={`ExExamples ${isFlipped ? "flipped" : ""}`}>
      <div className="ExConcepts-content">
        <h1>Quadratic Function Example</h1>
        
        <div className="inputs">
          <label>
            a: <input type="number" value={a} onChange={handleChange(setA)} />
          </label>
          <label>
            b: <input type="number" value={b} onChange={handleChange(setB)} />
          </label>
          <label>
            c: <input type="number" value={c} onChange={handleChange(setC)} />
          </label>
        </div>

        <h2>Standard Form:</h2>
        <p>
          y = {a}x^2 + {b}x + {c} 
        </p>

        <h2>Vertex Form:</h2>
        <p>
           y = {a}(x - {h.toFixed(2)})^2 + {k.toFixed(2)}
        </p>

        <h2>Graphical Representation:</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="y" stroke="#FF6347" />
          </LineChart>
        </ResponsiveContainer>

        <button className="flip-btn" onClick={handleFlip}>
          Take Quiz
        </button>
      </div>
    </div>
  );
}

export default QuadraticExamples;
