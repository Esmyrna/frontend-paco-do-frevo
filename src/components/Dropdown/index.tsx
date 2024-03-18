import React, { useState } from 'react';

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
    <select style={{height: '18px'}} value={selectedOption} onChange={(e) => handleSelectOption(e.target.value)}>
      <option value="">Selecione uma opção</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;