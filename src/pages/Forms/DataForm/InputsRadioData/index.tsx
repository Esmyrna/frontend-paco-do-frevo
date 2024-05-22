import React from 'react';
import { ContainerFields, ContainerInputsRadio } from '../../SecondStep/style';
import { RadioInput } from '../../../../components/RadioInputs/style';
import { Label } from '../../../../components/Input/style';
import { UserData, useGlobalContext } from '../../../../context';
import InputBigText from '../../../../components/TextArea';


const InputRadioData: React.FC = () => {
    const { userData, setUserData } = useGlobalContext();

    const handleRadioChange = (name: string, value: boolean) => {
        setUserData((prevUserData: UserData) => {
            return {
                ...prevUserData,
                [name]: value
            };
        });
    };

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData(prevUserData => ({
            ...prevUserData,
            [name]: value
        }));
    };
    return (
        <>
            <ContainerFields>
                <Label fontSize="15px">Possui sede própria?</Label>
                <ContainerInputsRadio>
                    <Label fontSize="15px">
                        <RadioInput
                            type="radio"
                            value="true"
                            checked={userData.hasOwnedHeadquarters === true}
                            onChange={() => handleRadioChange('hasOwnedHeadquarters', true)}
                        />
                        Sim
                    </Label>

                    <Label fontSize="15px">
                        <RadioInput
                            type="radio"
                            value="false"
                            checked={userData.hasOwnedHeadquarters === false}
                            onChange={() => handleRadioChange('hasOwnedHeadquarters', false)}
                        />
                        Não
                    </Label>
                </ContainerInputsRadio>
                <Label fontSize="15px">Possui residência compartilhada?</Label>
                <ContainerInputsRadio>
                    <Label fontSize="15px">
                        <RadioInput
                            type="radio"
                            value="true"
                            checked={userData.isSharedWithAResidence === true}
                            onChange={() => handleRadioChange('isSharedWithAResidence', true)}
                        />
                        Sim
                    </Label>

                    <Label fontSize="15px">
                        <RadioInput
                            type="radio"
                            value="false"
                            checked={userData.isSharedWithAResidence === false}
                            onChange={() => handleRadioChange('isSharedWithAResidence', false)}
                        />
                        Não
                    </Label>
                </ContainerInputsRadio>
                <Label fontSize="15px">Pode emitir nota fiscal?</Label>
                <ContainerInputsRadio>
                    <Label fontSize="15px">
                        <RadioInput
                            type="radio"
                            value="true"
                            checked={userData.canIssueOwnReceipts === true}
                            onChange={() => handleRadioChange('canIssueOwnReceipts', true)}
                        />
                        Sim
                    </Label>

                    <Label fontSize="15px">
                        <RadioInput
                            type="radio"
                            value="false"
                            checked={userData.canIssueOwnReceipts === false}
                            onChange={() => handleRadioChange('canIssueOwnReceipts', false)}
                        />
                        Não
                    </Label>
                </ContainerInputsRadio>


                <Label fontSize="15px">É uma entidade legal?</Label>
                <ContainerInputsRadio>
                    <Label fontSize="15px">
                        <RadioInput
                            type="radio"
                            value="true"
                            checked={userData.isLegalEntity === true}
                            onChange={() => handleRadioChange('isLegalEntity', true)}
                        />
                        Sim
                    </Label>

                    <Label fontSize="15px">
                        <RadioInput
                            type="radio"
                            value="false"
                            checked={userData.isLegalEntity === false}
                            onChange={() => handleRadioChange('isLegalEntity', false)}
                        />
                        Não
                    </Label>

                </ContainerInputsRadio>
                <Label fontSize="15px">História da agremiação</Label>
                <InputBigText name="associationHistoryNotes"
                    value={userData.associationHistoryNotes}
                    onChange={handleTextAreaChange} />
            </ContainerFields>
        </>
    );
}

export default InputRadioData;
