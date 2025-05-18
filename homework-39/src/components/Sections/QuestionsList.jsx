import React, { useState } from "react";
import { Questions } from "../../constants/questions.js";
import Button from "./Button.jsx";
import { ANSWERS_RESULT } from "../../constants/answers.js";
import Result from "./Result.jsx";
import { BUTTONS_TEXT } from "./../../constants/buttons.js";

const QuestionsList = () => {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const currentQuestion = Questions[currentQuestionIndex];
  const isCurrentQuestionAnswered = answers[currentQuestion.id] !== undefined;
  const handleChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };
  const calculateAnswers = Object.values(answers).reduce((accum, answer) => {
    return accum + answer;
  }, 0);
  const matchedResult = ANSWERS_RESULT.find((item) => {
    const [min, max] = item.range;
    return calculateAnswers >= min && calculateAnswers <= max;
  });
  const handleButtonClick = () => {
    if (currentQuestionIndex < Questions.length - 1) {
      setcurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };
  return (
    <div className="questions-list">
      <p className="questions">{currentQuestion.questionValue}</p>
      <div>
        {[1, 2, 3, 4, 5].map((num) => (
          <label key={num}>
            <input
              checked={answers[currentQuestion.id] === num}
              type="radio"
              name={`question${currentQuestion.id}`}
              value={num}
              onChange={() => handleChange(currentQuestion.id, num)}
            ></input>
            {num}
          </label>
        ))}
      </div>
      <Button
        disabled={!isCurrentQuestionAnswered}
        text={
          currentQuestionIndex < Questions.length - 1
            ? BUTTONS_TEXT.Next
            : BUTTONS_TEXT.ClickUp
        }
        onClick={handleButtonClick}
      />
      {showResult && matchedResult && (
        <Result matchedResult={matchedResult.result} />
      )}
    </div>
  );
};
export default QuestionsList;
