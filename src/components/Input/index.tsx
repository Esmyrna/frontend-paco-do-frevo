import React, { ChangeEvent } from 'react';
import { Field } from './style';

interface InputProps {
  placeholder?: string;
  width?: string;
  type: string;
  value?: string | number | boolean | (string | number | boolean)[] | undefined | null;  
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const Input: React.FC<InputProps> = ({ placeholder, width, type, value, onChange, name }) => {
  const inputType = type === 'checkbox' ? (value as boolean) : type === 'number' ? (value as number) : value;
  
  return (
    <>
      <Field
        value={inputType as string | number  | undefined }
        type={type}
        width={width}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    </>
  );
};

export default Input;
