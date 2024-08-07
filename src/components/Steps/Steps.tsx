import * as C from './style'
import { FaRegUser } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";


interface StepsProps {
    step: number;
}
const Steps: React.FC<StepsProps> = ({ step }) => {
    return (
        <>
            <C.Steps>
                <C.Step>
                    <FaRegUser size={25} color={step >= 1 && step <= 2 ? '#2e80e3' : 'gray'} />
                    <C.StepTitle>Dados Gerais</C.StepTitle>
                </C.Step>
                <C.HorizontalLine></C.HorizontalLine>
                <C.Step>
                    <FaRegAddressCard size={25} color={step === 3 ? '#2e80e3' : 'gray'} />
                    <C.StepTitle>Eventos e Membros</C.StepTitle>
                </C.Step>
                <C.HorizontalLine></C.HorizontalLine>
                <C.Step>
                    <FaNetworkWired size={25} color={step >= 4 ? '#2e80e3' : 'gray'} />
                    <C.StepTitle>Contatos</C.StepTitle>
                </C.Step>
            </C.Steps>

        </>

    )
}

export default Steps