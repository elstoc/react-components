import React, { useState } from 'react';

const Input = ({
  name,
  initialValue,
  autoComplete,
  labelText,
  inputHandler
}) => {

  const [ inputValue, setInputValue ] = useState(initialValue);

  const changeHandler = (event) => {
    const newValue = inputHandler ? inputHandler(event.target.value) : event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      {labelText && <label htmlFor={name}>{labelText}</label>}
      <input
        id={name}
        value={inputValue}
        autoComplete={autoComplete ? "on" : "off"}
        onChange={changeHandler}
      />
    </div>
  );
};

export default Input;
