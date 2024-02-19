import { ChangeEvent } from 'react';
import { InputText } from './style'

interface InputTextProps {
  value: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const InputBigText: React.FC<InputTextProps> = ({value, onChange}) => {
  return (
     <>
     <InputText 
     value={value}
     onChange={onChange}
     />
     </>
  )
}

export default InputBigText