
import React, { useState } from "react";

const questions = [
  {
    question: "What is the slope of the line y = 3x + 5?",
    options: ["0", "5", "3", "1"],
    correctAnswer: "3",
  },
  {
    question: "If the y-intercept of a line is -4 and the slope is 2, what is the equation of the line?",
    options: ["y = 4x + 2", "y = 2x - 4", "y = 2x + 4", "y = -2x - 4"],
    correctAnswer: "y = 2x - 4",
  },
  {
    question: "What is the y-intercept of the line y = -3x + 7?",
    options: ["-3", "7", "0", "3"],
    correctAnswer: "7",
  },
  {
    question: "If a line passes through the points (1, 2) and (3, 6), what is the slope?",
    options: ["2", "3", "4", "1"],
    correctAnswer: "2",
  },
  {
    question: "Which equation represents a line that is parallel to y = 5x + 3?",
    options: ["y = 7x - 5", "y = -5x + 2", "y = 3x + 5", "y = 5x - 7"],
    correctAnswer: "y = 5x - 7",
  },
];

function LinearQuiz() {
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
      setFeedback("❌ Incorrect. Try again.");
    }
  };

  const handleNext = () => {
    setFeedback("");
    setSelectedAnswer("");
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
    setIsAnswered(false);
  };

  const getButtonClass = (option) => {
    if (!isAnswered) return "button";
    if (option === questions[currentQuestion].correctAnswer) return "button correct";
    if (option === selectedAnswer) return "button incorrect";
    return "button";
  };

  return (
    <div className="quiz-container">
      <h2>Question {currentQuestion + 1} of {questions.length}</h2>
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
      <button onClick={handleNext} className="next-btn">Next</button>
    </div>
  );
}

export default LinearQuiz;
