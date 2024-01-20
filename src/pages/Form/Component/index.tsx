

import { useNavigate } from "react-router-dom"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import { Label } from "../../../components/Input/style"
import Nav from "../../../components/Nav"
import { BackButton, SaveInfos } from "../Legal Data/style"
import { ButtonAddContact, DataInfos, Fields, FormContainer, FormInputs, FormText, Infos, InputsContainer, Section,  SpaceButtonAdd, TextForm } from "./style"
import ConfettiExplosion from 'react-confetti-explosion';
import { useEffect, useState } from "react"
import { ButtonOptions } from "../General Data/style"
import Footer from "../../../components/Footer"
import RadioInputs from "../../../components/RadioInputs"
/**
 * Página de cadastro de uma agremiação
 * @returns 
 */

export const Components: React.FC = () => {
    const [isExploding, setIsExploding] = useState(false);

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


    useEffect(() => {
        if (isExploding) {
            const timeoutId = setTimeout(() => {
                setIsExploding(false);
            }, 3000);
            return () => clearTimeout(timeoutId);
        }
    }, [isExploding]);

    return (
        <>
            <Nav />
            <Section>
                <DataInfos>
                    <Infos>
                        <ButtonOptions isActive={false}>Dados gerais</ButtonOptions>
                        <ButtonOptions isActive={false}>Dados jurídicos</ButtonOptions>
                        <ButtonOptions isActive={true}>História da agremiação</ButtonOptions>
                    </Infos>
                </DataInfos>
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
                                    <Label fontSize={'16px'} >Nome:</Label>
                                    <Input type={'text'} width={'90%'} />
                                </InputsContainer>

                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Sobrenome:</Label>
                                    <Input type={'text'} width={'90%'} />
                                </InputsContainer>
                            </InputsContainer>
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
                                <InputsContainer width={'20%'} flexDirection="column">
                                    <Label fontSize={'16px'} >País:</Label>
                                    <Input type={'number'} width={'90%'} />
                                </InputsContainer>

                                <InputsContainer width={'20%'} flexDirection="column">
                                    <Label fontSize={'16px'}>DDD:</Label>
                                    <Input type={'number'} width={'90%'} />
                                </InputsContainer>

                                <InputsContainer width={'30%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Número de telefone:</Label>
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
            <Footer />
        </>
    )
}