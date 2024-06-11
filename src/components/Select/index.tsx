import React, { ChangeEvent } from 'react';
import { SelectInput } from './style';

interface SelectInputProps {
  placeholder?: string;
   children?: React.ReactNode;
   value?: string 
   onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectInputProps> = ({ placeholder, children, value, onChange }) => {
  return (
    <>
      <SelectInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      >
        {children}
      </SelectInput>
    </>
  );
};

export default Select;
