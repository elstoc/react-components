import React, { useState } from 'react';

const Input = ({ name, initialValue, autoComplete , labelText }) => {

  const [ inputValue, setInputValue ] = useState(initialValue);

  const changeHandler = (event) => {
    setInputValue(event.target.value);
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
