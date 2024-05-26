/* eslint-disable @typescript-eslint/no-explicit-any */
import { Label } from '../../../../components/Input/style';
import Input from '../../../../components/Input';
import { ContainerInputsRadio, MemberAddEvent } from './style';
import { useGlobalContext } from '../../../../context';
import { useEffect, useState } from 'react';
import { RadioInput } from '../../../../components/RadioInputs/style';
import { ContainerFields, ContainerFormLeft, ContainerFormRight } from '../../ControlForm/style';
import { ContainerAllInputs, ContainerForLabel } from '../FirstData/style';
import Select from '../../../../components/Select';
import { MidiaAddEvent } from '../MidiaStepData/style';
import { ESocialNetworkType } from '../../../../interfaces/enum';
import { SocialNetwork } from '../../../../interfaces/type';

export const MemberStepData: React.FC = () => {
    const { userData, setUserData } = useGlobalContext();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [role, setRole] = useState('');
    const [actuationTimeInMonths, setActuationTimeInMonths] = useState(0);
    const [isFrevoTheMainRevenueIncome, setIsFrevoTheMainRevenueIncome] = useState(false);

    const [socialNetworkType, setSocialNetworkType] = useState<ESocialNetworkType>(
        ESocialNetworkType.instagram
    );
    const [url, setUrl] = useState('');

    const addSocialNetwork = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newSocialNetwork: SocialNetwork = { socialNetworkType, url };
        setUserData((prevUserData) => ({
            ...prevUserData,
            socialNetworks: prevUserData.socialNetworks.length === 0 ? [newSocialNetwork] : [...prevUserData.socialNetworks, newSocialNetwork],
        }));
        setSocialNetworkType(ESocialNetworkType.instagram);
        setUrl('');
    };

    useEffect(() => {
        console.log(userData);
    }, [userData]);

    const handleAddMember = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('Adding member:', { name, surname, role, actuationTimeInMonths, isFrevoTheMainRevenueIncome });
        const newMember = {
            name,
            surname,
            role,
            actuationTimeInMonths,
            isFrevoTheMainRevenueIncome,
        };
        setUserData({
            ...userData,
            members: [...userData.members, newMember],
        });
        setName('');
        setSurname('');
        setRole('');
        setActuationTimeInMonths(0);
        setIsFrevoTheMainRevenueIncome(false);
    };

    const handleRadioChange = (value: boolean) => {
        setIsFrevoTheMainRevenueIncome(value);
    };

    return (
        <>
            <ContainerAllInputs>
                <ContainerFormLeft>
                    <ContainerFields>
                        <ContainerForLabel>
                            <Label fontSize="25px">Membros</Label>
                        </ContainerForLabel>
                        <ContainerForLabel>
                            <Label fontSize="15px">Nome do membro</Label>
                        </ContainerForLabel>
                        <Input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                        <ContainerForLabel>
                            <Label fontSize="15px">Sobrenome do membro</Label>
                        </ContainerForLabel>
                        <Input
                            type="text"
                            name="surname"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)} />
                        <ContainerForLabel>
                            <Label fontSize="15px">Papel</Label>
                        </ContainerForLabel>
                        <Input
                            type="text"
                            name="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)} />
                        <ContainerForLabel>
                            <Label fontSize="15px">Tempo de atuação em meses</Label>
                        </ContainerForLabel>
                        <Input
                            name="participantsAmount"
                            type="text"
                            value={actuationTimeInMonths}
                            onChange={(e) => setActuationTimeInMonths(Number(e.target.value))}
                        />
                        <ContainerForLabel>
                            <Label fontSize="15px">Frevo é a principal fonte de receita?</Label>
                        </ContainerForLabel>
                        <ContainerInputsRadio>

                            <Label fontSize="15px">
                                <RadioInput
                                    type="radio"
                                    value="true"
                                    checked={isFrevoTheMainRevenueIncome === true}
                                    onChange={() => handleRadioChange(true)}
                                />
                                Sim
                            </Label>

                            <Label fontSize="15px">
                                <RadioInput
                                    type="radio"
                                    value="false"
                                    checked={isFrevoTheMainRevenueIncome === false}
                                    onChange={() => handleRadioChange(false)}
                                />
                                Não
                            </Label>
                        </ContainerInputsRadio>
                        <MemberAddEvent onClick={handleAddMember}>Adicionar Membro</MemberAddEvent>
                    </ContainerFields>
                </ContainerFormLeft>
                <ContainerFormRight>
                    <ContainerFields>
                        <ContainerForLabel>
                            <Label fontSize="25px">Redes Sociais</Label>
                        </ContainerForLabel>
                        <ContainerForLabel>
                            <Label fontSize="15px">Tipo de rede social</Label>
                        </ContainerForLabel>
                        <Select
                            value={socialNetworkType}
                            onChange={(e) => setSocialNetworkType(e.target.value as ESocialNetworkType)}
                        >
                            <option value="">Selecione...</option>
                            {Object.values(ESocialNetworkType).map((network) => (
                                <option key={network} value={network}>
                                    {network}
                                </option>
                            ))}
                        </Select>
                        <ContainerForLabel>
                            <Label fontSize="15px">URL</Label>
                        </ContainerForLabel>
                        <Input name="url" type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
                        <MidiaAddEvent onClick={addSocialNetwork}>Enviar</MidiaAddEvent>
                    </ContainerFields>
                </ContainerFormRight>
            </ContainerAllInputs>

        </>
    )
}

export default MemberStepData