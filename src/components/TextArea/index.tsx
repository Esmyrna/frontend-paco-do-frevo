import { ChangeEvent } from 'react';
import { InputText } from './style';

interface InputTextProps {
  value: string | null;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const InputBigText: React.FC<InputTextProps> = ({ value, onChange }) => {
  // Converter null para string vazia '' se value for null
  const sanitizedValue = value === null ? '' : value;

  return (
    <>
      <InputText
        value={sanitizedValue}
        onChange={onChange}
      />
    </>
  );
};

export default InputBigText;
