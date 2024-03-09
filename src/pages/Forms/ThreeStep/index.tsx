


import Button from "../../../components/Button"
import Input from "../../../components/Input"
import { Label } from "../../../components/Input/style"
import { BackButton, InputTitle, SaveInfos } from "../SecondStep/style"
import { ButtonAddContact, ButtonMemberAdd, ButtonMemberContainer, Fields, FormContainer, FormInputs, FormText, InputSocialNetwork, InputsContacts, InputsContactsContainer, InputsSocialNetworkContainer, Section, Select, SpaceButtonAdd, TextForm } from "./style"
import ConfettiExplosion from 'react-confetti-explosion';
import { useContext, useState } from "react"
import { StepContext } from "../../../context"
import { ESocialNetworkType } from '../../../interfaces/enum'



export const ThreeStep: React.FC = () => {
    const [isExploding, setIsExploding] = useState(false);
    const { setUserData, setCurrentStep, socialNetworkType, setSocialNetworkType, url, setUrl, addressTo, email,
     setAddressTo, setEmail, countryCode, setCountryCode, areaCode} = useContext(StepContext) || {};


    const saveFormClick = async () => {
        setIsExploding(true)
    }


    const handleSocialNetworkTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSocialNetworkType && setSocialNetworkType(
            event.target.value as ESocialNetworkType,
        );
    };

    const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl && setUrl(
            event.target.value
        )
    };



    const handleAddSocialNetwork = () => {
        if (socialNetworkType && url) {
            setUserData && setUserData((prevData) => ({
                ...prevData,
                socialNetworks: [
                    ...prevData.socialNetworks,
                    {
                        socialNetworkType,
                        url,
                    },
                ],
            }));

            setSocialNetworkType && setSocialNetworkType(ESocialNetworkType.facebook);
            setUrl && setUrl('');
        } else {
            console.error("Preencha todos os campos antes de adicionar.");
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

                            <InputTitle>  <Label fontSize={'22px'} >Rede Social</Label> </InputTitle>
                            <InputsSocialNetworkContainer>
                                <InputSocialNetwork>
                                    <Label fontSize={'16px'} >Tipo de rede social:</Label>
                                    <Select width="95%"
                                        value={socialNetworkType}
                                        onChange={handleSocialNetworkTypeChange}>
                                        <option value="">Selecione um tipo de rede social</option>
                                        {Object.values(ESocialNetworkType).map((type) => (
                                            <option key={type} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </Select>
                                </InputSocialNetwork>

                                <InputSocialNetwork>
                                    <Label fontSize={'16px'} >Url:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        value={url}
                                        onChange={handleUrlChange}
                                    />
                                </InputSocialNetwork>
                                <ButtonMemberContainer>
                                    <ButtonMemberAdd onClick={handleAddSocialNetwork}>Adicionar</ButtonMemberAdd>
                                </ButtonMemberContainer>
                            </InputsSocialNetworkContainer>
                            <InputTitle>   <Label fontSize={'22px'} >Contatos</Label> </InputTitle>
                            <InputsContactsContainer>
                                <InputsContacts>
                                    <Label fontSize={'16px'} >Endereço para:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                    />
                                </InputsContacts>
                                <InputsContacts>
                                    <Label fontSize={'16px'}>Email:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                    />
                                </InputsContacts>
                            </InputsContactsContainer>
                            <InputsContactsContainer>
                                <InputsContacts>
                                    <Label fontSize={'16px'} >Código do País:</Label>
                                    <Input
                                        type={'number'}
                                        width={'90%'}
                                    />
                                </InputsContacts>
                                <InputsContacts>
                                    <Label fontSize={'16px'}>DDD:</Label>
                                    <Input
                                        type={'number'}
                                        width={'90%'}
                                    />
                                </InputsContacts>

                                <InputsContacts>
                                    <Label fontSize={'16px'} >Número para contato:</Label>
                                    <Input
                                        type={'number'}
                                        width={'90%'}
                                    />
                                </InputsContacts>
                                <SpaceButtonAdd>
                                    <ButtonAddContact>Adicionar</ButtonAddContact>
                                </SpaceButtonAdd>
                            </InputsContactsContainer>
                            <SaveInfos height={'100%'} justifyContent={'space-between'}>
                                <BackButton onClick={() => setCurrentStep && setCurrentStep(2)} >Voltar</BackButton>
                                <Button onClick={saveFormClick} backgroundColor={'#27962D'}>
                                    Salvar agremiação
                                </Button>
                            </SaveInfos>
                        </Fields>

                    </FormInputs>
                </FormContainer>
            </Section >

        </>
    )
}