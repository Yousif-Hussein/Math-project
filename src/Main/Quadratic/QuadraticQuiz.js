import React, { useState } from "react";

const questions = [
  {
    question: "What is the vertex of the quadratic equation \( y = 2x^2 - 4x + 1 \)?",
    options: ["(1, -1)", "(-1, 1)", "(1, -3)", "(0, 1)"],
    correctAnswer: "(1, -3)",
  },
  {
    question: "What are the roots of the quadratic equation \( x^2 - 5x + 6 = 0 \)?",
    options: ["2 and 3", "3 and 5", "1 and 6", "No real roots"],
    correctAnswer: "2 and 3",
  },
  {
    question: "What is the axis of symmetry for the quadratic equation \( y = -3x^2 + 6x - 2 \)?",
    options: ["x = -1", "x = 1", "x = 3", "x = -3"],
    correctAnswer: "x = 1",
  },
  {
    question: "Identify the standard form of a quadratic equation.",
    options: ["y = ax^2 + bx + c", "y = a(x - h)^2 + k", "y = mx + b", "y = ab^x"],
    correctAnswer: "y = ax^2 + bx + c",
  },
  {
    question: "If a quadratic has a discriminant less than 0, how many real roots does it have?",
    options: ["Two", "One", "None", "Infinite"],
    correctAnswer: "None",
  },
];

function QuadraticQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);

  const handleClick = (option) => {
    setSelectedAnswer(option);
    setIsAnswered(true);

    if (option === questions[currentQuestion].correctAnswer) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Incorrect.");
    }
  };

  const handleNext = () => {
    setFeedback("");
    setSelectedAnswer("");
    setIsAnswered(false);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0); // Restart quiz
    }
  };

  const getButtonClass = (option) => {
    if (!isAnswered) return "button";
    if (option === questions[currentQuestion].correctAnswer) return "button correct";
    if (option === selectedAnswer) return "button incorrect";
    return "button";
  };

  return (
    <div className="quiz-container">
      <h2>
        Question {currentQuestion + 1} of {questions.length}
      </h2>
      <p>{questions[currentQuestion].question}</p>
      <div className="options">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={getButtonClass(option)}
            onClick={() => handleClick(option)}
            disabled={isAnswered}
          >
            {option}
          </button>
        ))}
      </div>
      <p className="feedback">{feedback}</p>
      <button onClick={handleNext} className="next-btn">
        {currentQuestion === questions.length - 1 ? "Restart" : "Next"}
      </button>
    </div>
  );
}

export default QuadraticQuiz;
