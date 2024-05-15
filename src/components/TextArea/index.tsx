import { ChangeEvent } from 'react';
import { InputText } from './style';

interface InputTextProps {
  onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const InputBigText: React.FC<InputTextProps> = ({ onChange }) => {
  // Converter null para string vazia '' se value for null

  return (
    <>
      <InputText
        onChange={onChange}
      />
    </>
  );
};

export default InputBigText;
