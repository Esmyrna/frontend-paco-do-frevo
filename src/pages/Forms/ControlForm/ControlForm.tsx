import Footer from '../../../components/Footer'
import Nav from '../../../components/Nav'
import Steps from '../../../components/Steps/Steps'
import * as C from './style'
import { useState } from 'react'
import FirstData from '../DataForm/FirstData'
import axios from 'axios'
import { useGlobalContext } from '../../../context'
import { useNavigate } from 'react-router-dom';
import ConfettiExplosion from 'react-confetti-explosion';
import { ContactsAndMidiaData } from '../DataForm/ContactsAndMidiaData'

import { ContainerForButtonSignUp, TitleForSucess } from './style'
import BaseColors from '../../../styleguide/BaseColors'
import EventsAndMembersData from '../DataForm/EventsAndMembersData'
import AddressAndOthersInfosData from '../DataForm/AddressAndOthersInfosData'


const ControlForm: React.FC = () => {
    const [step, setStep] = useState(1);
    const { userData } = useGlobalContext();
    const [isExploding, setIsExploding] = useState(false);
    const navigate = useNavigate();
    const [sucess, setSucess] = useState<boolean | null>(null);

    const onSubmit = async () => {

        const BASE_URL = "https://pacodofrevoapi1-6ka9yo5l.b4a.run"
        try {
            const response = await axios.post(`${BASE_URL}/associations`, userData);
            console.log('Dados enviados com sucesso:', response.data);
            setIsExploding(true);
            setSucess(true)

        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            setSucess(false)
        }

    };

    const Listing = () => {
        navigate('/listing')
    }

    const onNextPage = () => {
        if (step < 5) {
            setStep(step + 1);
        } else {
            onSubmit();
        }
    };

    const onBack = () => {
        setStep(step - 1);
    };

    return (
        <>
            <Nav />
            <C.Section>
                <C.FormContainer>
                </C.FormContainer>
                <C.ContainerInputsForm>
                    <C.ContainerFormTitle>
                        <Steps step={step} />
                        {isExploding && (
                            <ConfettiExplosion
                                force={0.8}
                                duration={3000}
                                particleCount={250}
                                width={1600}
                            />
                        )}
                    </C.ContainerFormTitle>
                    <C.AllContainerForm>
                        {(step === 1) && <FirstData />}
                        {(step === 2) && <AddressAndOthersInfosData />}
                        {(step === 3) && <EventsAndMembersData />}
                        {(step === 4) && <ContactsAndMidiaData />}

                    </C.AllContainerForm>

                    <C.ContainerFormButtons>
                        {step === 1 && <C.ButtonForHome onClick={Listing}>Conferir Listagem</C.ButtonForHome>}
                        {step > 1 && <C.ButtonForBack onClick={onBack}>Voltar</C.ButtonForBack>}
                        {step < 4 && <C.ButtonForList onClick={onNextPage}>Próxima Etapa</C.ButtonForList>}
                        {step === 4 && (
                            <ContainerForButtonSignUp>
                                {sucess && <TitleForSucess color={BaseColors.vividGreen}>Dados cadastrados com sucesso! ✅</TitleForSucess>}
                                {sucess === false && <TitleForSucess color={BaseColors.vividRed}>Erro ao cadastrar agremiação❗</TitleForSucess>}
                            </ContainerForButtonSignUp>
                        )}
                        {step === 4 && <C.ButtonForList onClick={onSubmit}>Cadastrar agremiação</C.ButtonForList>}
                    </C.ContainerFormButtons>
                </C.ContainerInputsForm>
            </C.Section>
            <Footer />
        </>
    )
}

export default ControlForm
