import * as C from './style'
import { FaRegUser } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";


interface StepsProps {
    currentStep: number;
}
const Steps: React.FC<StepsProps> = ({ currentStep }) => {
    return (
        <>
            <C.Steps>
                <C.Step>
                    <FaRegUser size={25} color={currentStep === 1 ? '#2e80e3' : 'gray'} />
                    <C.StepTitle>Dados Gerais</C.StepTitle>
                </C.Step>
                <C.HorizontalLine></C.HorizontalLine>
                <C.Step>
                    <FaRegAddressCard size={25} color={currentStep === 2 ? '#2e80e3' : 'gray'} />
                    <C.StepTitle>Eventos</C.StepTitle>
                </C.Step>
                <C.HorizontalLine></C.HorizontalLine>
                <C.Step>
                    <FaNetworkWired size={25} color={currentStep === 3 ? '#2e80e3' : 'gray'} />
                    <C.StepTitle>Contatos</C.StepTitle>
                </C.Step>
            </C.Steps>

        </>

    )
}

export default Steps