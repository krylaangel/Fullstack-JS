import React from "react";

const Text = {
  ClickUp: "Порахувати бали",
};

const Button = ({ text, onClick, calculateAnswers, ...props }) => {
  return (
    <button className="button-up" onClick={onClick} {...props}>
      {text}
    </button>
  );
};
export { Text };
export default Button;
