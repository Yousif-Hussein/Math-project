
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LinearConcepts() {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleFlip = () => {
    setIsFlipped(true);

    // Wait for the flip animation to complete before navigating
    setTimeout(() => {
      navigate("/linear/example");
      setIsFlipped(false);
    }, 600); // Duration of the flip animation
  };

  const [clickedY, setClickedY] = useState(false);
  const [clickedA, setClickedA] = useState(false);
  const [clickedB, setClickedB] = useState(false);

  const toggleY = () => setClickedY(!clickedY);
  const toggleA = () => setClickedA(!clickedA);
  const toggleB = () => setClickedB(!clickedB);
  return (
    <div className={`ExConcepts ${isFlipped ? "flipped" : ""}`}>
      <div className="ExConcepts-content">
        <h1>Linear Equations</h1>
        <p className="ExConcepts-p">
          Imagine you're saving money every week. Each week, you add the same amount to your savings. This steady increase can be represented by a linear equation, a function that shows a constant rate of change.
        </p>

        <h2>Formula: </h2>
        <h3>
          <p className={`variable ${clickedY ? "clicked" : ""}`} onClick={toggleY}>
            y
          </p>
          =
          <p className={`variable ${clickedA ? "clicked" : ""}`} onClick={toggleA}>
            m
          </p>
          <p className="variable">x</p> +
          <p className={`variable ${clickedB ? "clicked" : ""}`} onClick={toggleB}>
             b
          </p>
        </h3>

        <div className="ExConcepts-p2">
          Where:
          <p className={`variable ${clickedY ? "clicked" : ""}`} onClick={toggleY}>- <strong>y</strong> = {clickedY ? "The output or dependent variable" : "The dependent variable"}</p>
          <p className={`variable ${clickedA ? "clicked" : ""}`} onClick={toggleA}>- <strong>m</strong> = {clickedA ? "The slope or rate of change" : "The slope of the line"}</p>
          <p className="variable">- <strong>x</strong> = The independent variable</p>
          <p className={`variable ${clickedB ? "clicked" : ""}`} onClick={toggleB}>- <strong>b</strong> = {clickedB ? "The y-intercept where the line crosses the y-axis" : "The y-intercept"}</p>
        </div>

        <button className="flip-btn" onClick={handleFlip}>
          View Example
        </button>
      </div>
    </div>
  );
}

export default LinearConcepts;
