import React, { ChangeEvent } from 'react';
import { FaFilter } from 'react-icons/fa';
import styled from 'styled-components';
import { EAssociationType } from '../../interfaces/enum';

const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  border: 1px solid #615b5b;
  border-radius: 5px;
  padding: 5px;

  background-color: ${props => props.backgroundColor ?? 'transparent'};
`;

const InputField = styled.select`
  border: none;
  outline: none;
  padding: 5px;
  flex: 1;
`;

const FilterIcon = styled(FaFilter)`
  margin-right: 5px;
`;

interface InputContainerProps{
    backgroundColor?: string;
}

interface InputWithFilterIconProps extends InputContainerProps {
  placeholder: string;
  value?: string | Array<EAssociationType>;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}

const InputFilterCategory: React.FC<InputWithFilterIconProps> = ({ placeholder, value, onChange, children, ...props }) => {
  return (
    <InputContainer backgroundColor={props.backgroundColor}>
      <InputField
       placeholder={placeholder} {...props}
       value={value}
       onChange={onChange}
      >
          {children}
      </InputField>
      <FilterIcon />
    </InputContainer>
  );
};

export default InputFilterCategory;
