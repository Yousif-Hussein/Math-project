
import React, { useState } from "react";

const questions = [
  {
    question: "A population of bacteria is 500 and grows at a rate of 5% per hour. What could be the equation of this scenario?",
    options: ["500(1.5)^x", "500(1.05)^x", "0.05(500)^x", "500(0.05)^x"],
    correctAnswer: "500(1.05)^x",
  },
  {
    question: "An investment of $1000 grows at an annual rate of 8%. How long will it take for the investment to double in value?",
    options: ["10", "9", "1.2", "2"],
    correctAnswer: "9",
  },
  {
    question: "A population of bacteria is 500 and grows at a rate of 5% per hour. What will the population be after 6 hours?",
    options:["670","5695","7.8","626"],
    correctAnswer:"670"
  },
  {
    question: "3(2)^x=48.Solve for x.",
    options:["3","5","4","2"],
    correctAnswer:"4"
  }
];

function Quiz() {
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
    setIsAnswered(false)
  };
  const getButtonClass = (option) => {
    if (!isAnswered) return "button";
    if (option === questions[currentQuestion].correctAnswer) return "button correct";
    if (option === selectedAnswer) return "button incorrect";
    return "button";}
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

export default Quiz;
