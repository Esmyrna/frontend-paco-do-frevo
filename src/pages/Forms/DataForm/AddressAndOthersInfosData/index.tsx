import React from 'react';
import { Label } from '../../../../components/Input/style';
import Input from '../../../../components/Input';
import { UserData, useGlobalContext } from '../../../../context';
import { ContainerFields, ContainerFormLeft, ContainerFormRight } from '../../ControlForm/style';
import { ContainerAllInputs, ContainerForLabel } from '../FirstData/style';
import { RadioInput } from '../../../../components/RadioInputs/style';
import { ContainerInputsRadio } from '../ContactsAndMidiaData/style';
import InputBigText from '../../../../components/TextArea';
import Select from '../../../../components/Select';
import { brazilStates } from '../../../../interfaces/brazilStates';
import { BrazilStatesType } from '../../../../interfaces/enum';

const AddressAndOthersInfosData: React.FC = () => {
  const { userData, setUserData } = useGlobalContext();

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserData(prevUserData => {
      const updatedUserData = {
        ...prevUserData,
        address: {
          ...prevUserData.address,
          [name]: value
        }
      };
      console.log(updatedUserData);
      return updatedUserData;
    });
  };




  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value
    }));
  };


  const handleSelectSaveChange = (name: string, value: string | number | string[]) => {
    setUserData(prevUserData => ({
      ...prevUserData,
      address: {
        ...prevUserData.address,
        [name]: value
      }
    }));
  };

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


  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleSelectSaveChange('state', e.target.value as BrazilStatesType);
  };

  return (
    <>
      <ContainerAllInputs>
        <ContainerFormLeft>
          <ContainerFields>
            <Label fontSize="25px">Continue...</Label>
            <ContainerForLabel>
              <Label fontSize="15px">Estado</Label>
            </ContainerForLabel>
            <Select
              value={userData.address?.state as BrazilStatesType}
              onChange={handleSelectChange}
            >
              <option value="">Selecione um estado</option>
              {brazilStates.map(state => (
                <option key={state.abbreviation} value={state.abbreviation}>
                  {state.abbreviation}
                </option>
              ))}
            </Select>

            <ContainerForLabel>
              <Label fontSize="15px">CEP</Label>
            </ContainerForLabel>
            <Input
              type="text"
              value={userData.address.zipCode}
              name="zipCode"
              onChange={handleAddressChange}
            />
            <ContainerForLabel>
              <Label fontSize="15px">CNPJ</Label>
            </ContainerForLabel>
            <Input
              type="text"
              value={userData.cnpj}
              name="cnpj"
              onChange={handleInputChange}
            />
            <ContainerForLabel>
              <Label fontSize="15px">História da agremiação</Label>
            </ContainerForLabel>
            <InputBigText name="associationHistoryNotes"
              value={userData.associationHistoryNotes}
              onChange={handleTextAreaChange} />
          </ContainerFields>
        </ContainerFormLeft>
        <ContainerFormRight>
          <ContainerFields>
            <ContainerForLabel>
              <Label fontSize="15px">Possui sede própria?</Label>
            </ContainerForLabel>
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
            <ContainerForLabel>
              <Label fontSize="15px">Possui residência compartilhada?</Label>
            </ContainerForLabel>
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
            <ContainerForLabel>
              <Label fontSize="15px">Pode emitir nota fiscal?</Label>
            </ContainerForLabel>
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

            <ContainerForLabel>
              <Label fontSize="15px">É uma entidade legal?</Label>
            </ContainerForLabel>
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

          </ContainerFields>
        </ContainerFormRight>
      </ContainerAllInputs>
    </>

  );
};

export default AddressAndOthersInfosData;
