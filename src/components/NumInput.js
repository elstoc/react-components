import React from 'react';
import Input from './Input';

const NumInput = (props) => {

  const { numType } = props;

  const inputHandler = (value) => {
    if (numType === "int") {
      return value.replace(/[^1234567890-]/g, '');
    }
    return value.replace(/[^1234567890\-.eE]/g, '');
  };

  return (
    <Input inputHandler={inputHandler} {...props} />
  )
};

export default NumInput;
