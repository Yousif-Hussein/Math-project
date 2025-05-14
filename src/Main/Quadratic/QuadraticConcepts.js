
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function QuadraticConcepts() {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleFlip = () => {
    setIsFlipped(true);

    setTimeout(() => {
      navigate("/quadratic/example");
      setIsFlipped(false);
    }, 600); 
  };
  const [clickedA, setClickedA] = useState(false);
  const [clickedB, setClickedB] = useState(false);
  const [clickedC, setClickedC] = useState(false);
  const [clickedH, setClickedH] = useState(false);
  const [clickedK, setClickedK] = useState(false);
  const [clickedX, setClickedX] = useState(false);
  const [clickedY, setClickedY] = useState(false);

  const toggleA = () => setClickedA(!clickedA);
  const toggleB = () => setClickedB(!clickedB);
  const toggleC = () => setClickedC(!clickedC);
  const toggleH = () => setClickedH(!clickedH);
  const toggleK = () => setClickedK(!clickedK);
  const toggleX = () => setClickedX(!clickedX);
  const toggleY = () => setClickedY(!clickedY);

  return (
    <div className={`ExConcepts ${isFlipped ? "flipped" : ""}`}>
      <div className="ExConcepts-content">
        <h1>Quadratic Functions</h1>

        <p className="ExConcepts-p">
          Quadratic functions are expressed in the form of \( y = ax^2 + bx + c \) and graph as a parabola.
        </p>

        <h2>Standard Form:</h2>
        <h3>
          <p className={`variable ${clickedY ? "clicked" : ""}`}>
            y
          </p>
          =
          <p className={`variable ${clickedA ? "clicked" : ""}`}>
            a
          </p>
          <p className={`variable ${clickedX ? "clicked" : ""}`}>
            x²
          </p>
          +
          <p className={`variable ${clickedB ? "clicked" : ""}`}>
            b
          </p>
          <p className={`variable ${clickedX ? "clicked" : ""}`}>
            x
          </p>
          +
          <p className={`variable ${clickedC ? "clicked" : ""}`}>
            c
          </p>
        </h3>

        <h2>Vertex Form:</h2>
        <h3>
          <p className={`variable ${clickedY ? "clicked" : ""}`}>
            y
          </p>
          =
          <p className={`variable ${clickedA ? "clicked" : ""}`}>
            a
          </p>
          (
          <p className={`variable ${clickedX ? "clicked" : ""}`}>
            x - 
          </p>
          <p className={`variable ${clickedH ? "clicked" : ""}`}>
            h
          </p>
          )² +
          <p className={`variable ${clickedK ? "clicked" : ""}`}>
            k
          </p>
        </h3>

        <h2>Factored Form:</h2>
        <h3>
          <p className={`variable ${clickedY ? "clicked" : ""}`}>
            y
          </p>
          =
          <p className={`variable ${clickedA ? "clicked" : ""}`}>
            a
          </p>
          (
          <p className={`variable ${clickedX ? "clicked" : ""}`}>
            x - p
          </p>
          )(
          <p className={`variable ${clickedX ? "clicked" : ""}`}>
            x - q
          </p>
          )
        </h3>

        <h2>Quadratic Formula:</h2>
        <h3>
          <p className={`variable ${clickedX ? "clicked" : ""}`}>
            x
          </p>
          =
          <span> - </span>
          <p className={`variable ${clickedB ? "clicked" : ""}`}>
            b
          </p>
          ± √(
          <p className={`variable ${clickedB ? "clicked" : ""}`}>
            b²
          </p>
          -
          4
          <p className={`variable ${clickedA ? "clicked" : ""}`}>
            a
          </p>
          <p className={`variable ${clickedC ? "clicked" : ""}`}>
            c
          </p>
          ) / 2
          <p className={`variable ${clickedA ? "clicked" : ""}`}>
            a
          </p>
        </h3>

        <div className="ExConcepts-p2">
          <p><strong>Standard Form:</strong> Identifies the y-intercept and the general shape of the parabola.</p>
          <p><strong>Vertex Form:</strong> Reveals the vertex (h, k) and is useful for determining the direction of the parabola.</p>
          <p><strong>Factored Form:</strong> Shows the roots or x-intercepts of the quadratic function.</p>
          <p><strong>Quadratic Formula:</strong> Provides a method for finding the exact roots of a quadratic equation.</p>
        </div>

        <button className="flip-btn" onClick={handleFlip}>
          View Example
        </button>
      </div>
    </div>
  );
}

export default QuadraticConcepts;
