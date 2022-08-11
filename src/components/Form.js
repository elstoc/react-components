import React, { useCallback, useState } from "react";
import FormContext from "./FormContext";

const Form = ({ children }) => {
  const [values, setValues] = useState({});

  const setValue = useCallback(
    (field, val) => {
      setValues((oldValues) => {
        const newValues = { ...oldValues };
        newValues[field] = val;
        return newValues;
      })
    },
    [setValues]
  );

  let getValue = useCallback((field) => values[field], [values]);

  let form = { setValue, getValue };

  return (
    <div className="form-container">
      <FormContext.Provider value={form}>
        {children}
      </FormContext.Provider>
    </div>
  )
};

export default Form;
