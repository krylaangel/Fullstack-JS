import React, { useState } from "react";
import { QUESTIONS } from "./Questions";
import Button, { Text } from "./Button";
import { ANSWERS_RESULT } from "./Answers";
import Result from "./Result";

const QuestionsList = () => {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
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
    setShowResult(true);
  };
  return (
    <div className="questions-list">
      {QUESTIONS.map((question) => (
        <div key={question.id}>
          <p>{question.questionValue}</p>
          <div>
            {[1, 2, 3, 4, 5].map((num) => (
              <label key={num}>
                <input
                  checked={answers[question.id] === num}
                  type="radio"
                  name={`question${question.id}`}
                  value={num}
                  onChange={() => handleChange(question.id, num)}
                ></input>
                {num}
              </label>
            ))}
          </div>
        </div>
      ))}
      <Button
        calculateAnswers={calculateAnswers}
        text={Text.ClickUp}
        onClick={handleButtonClick}
      />
      {showResult && matchedResult && (
        <Result matchedResult={matchedResult.result} />
      )}
    </div>
  );
};
export default QuestionsList;
