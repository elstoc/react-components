import React, { useState } from 'react';

const Input = ({ name, initialValue, autoComplete , labelText }) => {

  const [ inputValue, setInputValue ] = useState(initialValue);

  const changeHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <React.Fragment>
      {labelText && <label htmlFor={name}>{labelText}</label>}
      <input
        id={name}
        value={inputValue}
        autoComplete={autoComplete ? "on" : "off"}
        onChange={changeHandler}
      />
    </React.Fragment>
  );
};

export default Input;
