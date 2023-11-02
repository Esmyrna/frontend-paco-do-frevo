import React from 'react';
import { Field } from './style';

interface InputProps {
  placeholder?: string;
  width?: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ placeholder, width, type }) => {
  return (
    <>
      <Field type={type} width={width} placeholder={placeholder} />
    </>
  );
};

export default Input;
