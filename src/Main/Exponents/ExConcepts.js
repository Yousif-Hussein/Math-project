
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ExConcepts() {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleFlip = () => {
    setIsFlipped(true);

    // Wait for the flip animation to complete before navigating
    setTimeout(() => {
      navigate("/exponents/example");
      setIsFlipped(false);
    }, 600);
  };
  const [clickedY, setClickedY] = useState(false);
  const [clickedA, setClickedA] = useState(false);
  const [clickedB, setClickedB] = useState(false);
  const [clickedX, setClickedX] = useState(false);
  const toggleY = () => setClickedY(!clickedY);
  const toggleA = () => setClickedA(!clickedA);
  const toggleB = () => setClickedB(!clickedB);
  const toggleX = () => setClickedX(!clickedX);


  return (
    <div className={`ExConcepts ${isFlipped ? "flipped" : ""}`}>
      <div className="ExConcepts-content">
        <h1>Exponential Functions</h1>
      <p className="ExConcepts-p">
        Imagine you post an online video, and surprisingly, it got thousands of views within the first hour. This rapid spread is called an Exponential function and can be expressed through an Exponential Equation.
        Exponential functions describe processes that multiply at a constant rate over time.
      </p>

      <h2>Formula: </h2>
      <h3>
        <p className={`variable ${clickedY ? "clicked" : ""}`} onClick={toggleY}>
          y
        </p>
        =
        <p className={`variable ${clickedA ? "clicked" : ""}`} onClick={toggleA}>
          a
        </p>
        <p className={`variable ${clickedB ? "clicked" : ""}`} onClick={toggleB}>
          (b)
        </p>
        ^
        <p className={`variable ${clickedX ? "clicked" : ""}`} onClick={toggleX}>
          x
        </p>
      </h3>

      <div className="ExConcepts-p2">
        Where:
        <p className={`variable ${clickedY ? "clicked" : ""}`} onClick={toggleY}>- <strong>y</strong> = {clickedY ? "The final value (after exponential growth or decay)" : "The final amount"} </p>
        <p className={`variable ${clickedA ? "clicked" : ""}`} onClick={toggleA}>- <strong>a</strong> = {clickedA ? "The initial value at time 0" : "The initial amount or starting value"}</p>
        <p className={`variable ${clickedB ? "clicked" : ""}`} onClick={toggleB}>- <strong>b</strong> = {clickedB ? "The growth factor (if b > 1) or decay factor (if 0 < b < 1)" : "The growth factor or decay factor"}</p>
        <p className={`variable ${clickedX ? "clicked" : ""}`} onClick={toggleX}>- <strong>x</strong> = {clickedX ? "The time or number of periods" : "Time"}</p>
      </div>

        <button className="flip-btn" onClick={handleFlip}>
          View Example
        </button>
      </div>
    </div>
  );
}

export default ExConcepts;

