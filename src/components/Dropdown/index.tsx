import React, { useState } from 'react';
import { DropdownWrapper } from './styles';

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  onSelect: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelectOption = (value: string) => {
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <DropdownWrapper value={selectedOption} onChange={(e) => handleSelectOption(e.target.value)}>
      <option value="">Selecione uma opção</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </DropdownWrapper>
  );
};

export default Dropdown;