// MultiStepForm.tsx
import React, { useState } from 'react';
import { OneStep } from '../../pages/Forms/OneStep';
import { SecondStep } from '../../pages/Forms/SecondStep';
import { ThreeStep } from '../../pages/Forms/ThreeStep';


const MultiStepForm: React.FC = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    switch (step) {
        case 1:
            return <OneStep onNext={nextStep} />;
        case 2:
            return <SecondStep onNext={nextStep} onBack={prevStep} />;
        case 3:
            return <ThreeStep onBack={prevStep} />;
        default:
            return null;
    }
};

export default MultiStepForm;
