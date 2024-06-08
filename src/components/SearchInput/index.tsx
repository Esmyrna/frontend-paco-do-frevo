import { ChangeEvent } from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #615b5b;
  border-radius: 5px;
  padding: 5px;
  width: 80%;
`;

const InputField = styled.input`
  border: none;
  outline: none;
  padding: 5px;
  flex: 1;
`;

const SearchIcon = styled(FaSearch)`
  margin-left: 5px; 
`;

interface InputWithSearchIconProps {
    placeholder: string;
    value: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputFilterSearch: React.FC<InputWithSearchIconProps> = ({ placeholder, onChange, value, ...props }) => {
    return (
        <InputContainer>
            <InputField onChange={onChange} value={value} placeholder={placeholder} {...props} />
            <SearchIcon />
        </InputContainer>
    );
};


export default InputFilterSearch