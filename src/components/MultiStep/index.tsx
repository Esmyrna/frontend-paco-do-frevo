// MultiStepForm.tsx
import React, { useState } from 'react';
 
import ThirdStep from '../../pages/Forms/ThirdStep'
import FirstStep from '../../pages/Forms/FirstStep/FirstStep';
import SecondStep from '../../pages/Forms/SecondStep';
import FourthStep from '../../pages/Forms/FourthStep'

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
            return <FirstStep onNext={nextStep} />;
        case 2:
            return <SecondStep onNext={nextStep} onBack={prevStep} />;
        case 3:
            return <ThirdStep onNext={nextStep} onBack={prevStep} />;
        case 4:
            return <FourthStep  onBack={prevStep} />;
        default:
            return null;
    }
};

export default MultiStepForm;
