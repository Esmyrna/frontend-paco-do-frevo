import React from 'react';
import { RadioInput } from "./style";

interface RadioInputsProps {
    value: string;
    onChange: (value: string) => void;
    checked: boolean;  
}

const RadioInputs: React.FC<RadioInputsProps> = ({ value, onChange, checked }) => {
    return (
        <>
            <RadioInput
                onChange={() => onChange(value)}
                value={value}
                type={'radio'}
                checked={checked}
            />
        </>
    );
}

export default RadioInputs;
