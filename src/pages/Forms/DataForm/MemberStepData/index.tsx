/* eslint-disable @typescript-eslint/no-explicit-any */
import { Label } from '../../../../components/Input/style';
import Input from '../../../../components/Input';
import { ContainerFields, ContainerInputsRadio } from '../../SecondStep/style';
import { MemberAddEvent } from './style';
import { useGlobalContext } from '../../../../context';
import { useState } from 'react';
import { RadioInput } from '../../../../components/RadioInputs/style';

export const MemberStepData: React.FC = () => {
    const { userData, setUserData } = useGlobalContext();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [role, setRole] = useState('');
    const [actuationTimeInMonths, setActuationTimeInMonths] = useState(0);
    const [isFrevoTheMainRevenueIncome, setIsFrevoTheMainRevenueIncome] = useState(false);


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
            <ContainerFields>
                <Label fontSize="25px">Membros</Label>
                <Label fontSize="15px">Nome do membro</Label>
                <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />

                <Label fontSize="15px">Sobrenome do membro</Label>
                <Input
                    type="text"
                    name="surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)} />

                <Label fontSize="15px">Papel</Label>
                <Input
                    type="text"
                    name="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)} />

                <Label fontSize="15px">Tempo de atuação em meses</Label>
                <Input
                    name="participantsAmount"
                    type="text"
                    value={actuationTimeInMonths}
                    onChange={(e) => setActuationTimeInMonths(Number(e.target.value))}
                />
                <Label fontSize="15px">Frevo é a principal fonte de receita?</Label>
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
        </>
    )
}

export default MemberStepData