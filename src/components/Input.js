import { useContext, useEffect } from 'react';
import FormContext from './FormContext';

const Input = ({
  name,
  initialValue,
  autoComplete,
  labelText,
  inputHandler
}) => {

  const form = useContext(FormContext);

  const setVal = form.setValue;

  useEffect(() => {
    setVal(name, initialValue);
  }, [name, setVal, initialValue]);

  if (!form.getValue) {
    return 'This component must be wrapped in a form';
  }

  const value = form.getValue(name) || "";

  const changeHandler = (event) => {
    const newValue = inputHandler ? inputHandler(event.target.value) : event.target.value;
    form.setValue(name, newValue);
  };

  return (
    <div>
      {labelText && <label htmlFor={name}>{labelText}</label>}
      <input
        id={name}
        value={value}
        autoComplete={autoComplete ? "on" : "off"}
        onChange={changeHandler}
      />
    </div>
  );
};

export default Input;
