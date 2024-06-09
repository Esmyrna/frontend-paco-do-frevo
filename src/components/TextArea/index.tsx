import { ChangeEvent } from 'react';
import { InputText } from './style';

interface InputTextProps {
  value: string
  onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  name: string
}

const InputBigText: React.FC<InputTextProps> = ({ onChange, value, name }) => {

  return (
    <>
      <InputText
        onChange={onChange}
        value={value}
        name={name}
      />
    </>
  );
};

export default InputBigText;
