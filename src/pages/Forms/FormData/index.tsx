import { useContext, useState } from "react";
import { OneStep } from "../OneStep";
import { ButtonOptions, DataInfos, Infos } from "../OneStep/style";
import { SecondStep } from "../SecondStep";
import { ThreeStep } from "../ThreeStep";
import { AllFormPage } from "./style";
import { StepContext } from "../../../context";



export const FormData = () => {


    const [step, setStep] = useState(1);
    const { currentStep } = useContext(StepContext) ?? {};

    function showStep(step: unknown) {
        switch (step) {
            case 1:
                return <OneStep />
            case 2:
                return <SecondStep />
            case 3:
                return <ThreeStep />
        }
    }

    return (
        <>
            <AllFormPage>
                <DataInfos>
                    <Infos>
                        <ButtonOptions
                            isActive={step === 1}
                            onClick={() => setStep(1)}
                        >
                            Dados gerais
                        </ButtonOptions>
                        <ButtonOptions
                            isActive={step === 2}
                            onClick={() => setStep(2)}
                        >
                            Dados jurídicos
                        </ButtonOptions>
                        <ButtonOptions
                            isActive={step === 3}
                            onClick={() => setStep(3)}
                        >
                            História da agremiação
                        </ButtonOptions>
                    </Infos>
                </DataInfos>
                {showStep(currentStep)}
            </AllFormPage>
        </>
    );
}; 
