import React from 'react';
import Input from './Input';

const NumInput = (props) => {

  const inputHandler = (value) => {
    return value.replace(/[^1234567890\-.eE]/g, '');
  };

  return (
    <Input inputHandler={inputHandler} {...props} />
  )
};

export default NumInput;
