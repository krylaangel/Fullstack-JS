import React from 'react';
import{useState, useEffect} from 'react';

const Text = {
    ClickUp:"click-up",
    ClickDown:"click-down",
};


const Button = ({text, onClick, ...props}) => {
    return (<button className="button-up" onClick={onClick} {...props} >{text}</button>)
}
export {Text};
export default Button;