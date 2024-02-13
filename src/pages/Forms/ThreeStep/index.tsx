

import { useNavigate } from "react-router-dom"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import { Label } from "../../../components/Input/style"
import { BackButton, SaveInfos } from "../SecondStep/style"
import { ButtonAddContact, Fields, FormContainer, FormInputs, FormText, InputsContainer, Section, SpaceButtonAdd, TextForm } from "./style"
import ConfettiExplosion from 'react-confetti-explosion';
import {   useContext, useState } from "react"

import RadioInputs from "../../../components/RadioInputs"
import { StepContext } from "../../../context"
/**
 * Página de cadastro de uma agremiação
 * @returns 
 */

export const ThreeStep: React.FC = () => {
    const [isExploding, setIsExploding] = useState(false);
    const { submitData } = useContext(StepContext);

    const navigate = useNavigate();

    const backPageClick = () => {
        navigate('/cadastrar-agremiacao/dados-juridicos');
    }

    const saveFormClick = () => {
        setIsExploding(true)

    }

    const [radioThree, setRadioThree] = useState('');

    const handleRadioChange = (value: string, radioGroup: string) => {
        if (radioGroup === 'radioThree') {
            setRadioThree(value)
        }
    };

 

    return (
        <>

            <Section>

                <FormContainer>
                    <FormText>
                        <TextForm>
                            O Paço do Frevo está montando
                            um banco de dados para mapear
                            quem faz a manifestação popular
                            Patrimônio Imaterial do Brasil e
                            da humanidade, dentro e fora do
                            Carnaval!
                            <br></br>
                            <br></br>
                            Cadastre sua
                            agremiação, troça, clube, bloco,
                            orquestra, grupo, atividade
                            artística ou produção cultural e
                            siga conosco no bloco de quem
                            mantém o Frevo vivo o ano todo!
                        </TextForm>
                    </FormText>
                    <FormInputs>   {isExploding && (
                        <ConfettiExplosion
                            force={0.8}
                            duration={3000}
                            particleCount={250}
                            width={1600}
                        />
                    )}
                        <Fields>

                            <InputsContainer width={'100%'} flexDirection="row">
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Papel:</Label>
                                    <Input type={'text'} width={'90%'} />
                                </InputsContainer>

                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Tempo de atuação em meses:</Label>
                                    <Input type={'number'} width={'90%'} />
                                </InputsContainer>
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'14px'} >Frevo é a principal receita?</Label>
                                    <InputsContainer width={'100%'} flexDirection="row">
                                        <RadioInputs value={'sim'} checked={radioThree === 'sim'} onChange={() => handleRadioChange('sim', 'radioThree')} /> <Label fontSize={'16px'}>Sim</Label>
                                        <RadioInputs value={'nao'} checked={radioThree === 'nao'} onChange={() => handleRadioChange('nao', 'radioThree')} /> <Label fontSize={'16px'}>Não</Label>
                                    </InputsContainer>
                                </InputsContainer>

                            </InputsContainer>
                            <InputsContainer width={'100%'} flexDirection="row">
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Tipo de rede social:</Label>
                                    <Input type={'text'} width={'90%'} />
                                </InputsContainer>

                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Url:</Label>
                                    <Input type={'text'} width={'90%'} />
                                </InputsContainer>
                            </InputsContainer>
                            <InputsContainer width={'100%'} flexDirection="row">
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Endereço para:</Label>
                                    <Input type={'text'} width={'90%'} />
                                </InputsContainer>

                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Email:</Label>
                                    <Input type={'text'} width={'90%'} />
                                </InputsContainer>
                            </InputsContainer>

                            <Label fontSize={'18px'}>Número de telefone:</Label>
                            <InputsContainer width={'100%'} flexDirection="row">
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Código do País:</Label>
                                    <Input type={'number'} width={'90%'} />
                                </InputsContainer>

                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>DDD:</Label>
                                    <Input type={'number'} width={'90%'} />
                                </InputsContainer>

                            </InputsContainer>
                            <InputsContainer width={'100%'} flexDirection="row">
                                <InputsContainer width={'70%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Número para contato:</Label>
                                    <Input type={'number'} width={'90%'} />
                                </InputsContainer>
                                <SpaceButtonAdd>
                                    <ButtonAddContact>Adicionar</ButtonAddContact>
                                </SpaceButtonAdd>
                            </InputsContainer>


                            <SaveInfos height={'100%'} justifyContent={'space-between'}>
                                <BackButton onClick={backPageClick} >Voltar</BackButton>
                                <Button onClick={saveFormClick} backgroundColor={'#27962D'}>
                                    Salvar agremiação
                                </Button>
                            </SaveInfos>
                        </Fields>

                    </FormInputs>
                </FormContainer>
            </Section>

        </>
    )
}