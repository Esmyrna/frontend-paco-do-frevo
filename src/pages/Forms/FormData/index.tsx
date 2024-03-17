import { DataInfos, Infos, ButtonOptions } from "../OneStep/style";
import { AllFormPage } from "./style";
import { OneStep } from "../OneStep";
import { SecondStep } from "../SecondStep";
import { ThreeStep } from "../ThreeStep";
import useStore from "../../../context/useStore";

export const FormData = () => {
  const { currentStep, setCurrentStep } = useStore();

  function showStep(step: number) {
    switch (step) {
      case 1:
        return <OneStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThreeStep />;
      default:
        return null;
    }
  }

  return (
    <>
      <AllFormPage>
        <DataInfos>
          <Infos>
            <ButtonOptions
              isActive={currentStep === 1}
              onClick={() => setCurrentStep(1)}
            >
              Dados gerais
            </ButtonOptions>
            <ButtonOptions
              isActive={currentStep === 2}
              onClick={() => setCurrentStep(2)}
            >
              Dados jurídicos
            </ButtonOptions>
            <ButtonOptions
              isActive={currentStep === 3}
              onClick={() => setCurrentStep(3)}
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
