import React from 'react';
import { Label } from '../../../../components/Input/style';
import Input from '../../../../components/Input';
import Select from '../../../../components/Select';
import { useGlobalContext } from '../../../../context';
import { EAssociationType } from '../../../../interfaces/enum';
import { ContainerFields, ContainerFormLeft, ContainerFormRight } from '../../ControlForm/style';
import { ContainerAllInputs, ContainerForLabel } from './style';

 
const FirstData: React.FC = () => {
  const { userData, setUserData } = useGlobalContext();

  const handleInputChange = (name: string, value: string | number | string[]) => {
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleInputChange('associationType', e.target.value as EAssociationType);
  };

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

  const handleInputChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'colors') {
      handleInputChange(name, value.split(',').map(color => color.trim()));
    } else if (name === 'activeMembers') {
      handleInputChange(name, parseInt(value, 10) || 0);
    } else {
      handleInputChange(name, value);
    }
  };

  return (
    <>
    <ContainerAllInputs>
     <ContainerFormLeft>
     <ContainerFields>
      <ContainerForLabel>
        <Label fontSize="15px">Nome da agremiação</Label>
      </ContainerForLabel>
      <Input
        type="text"
        value={userData.name}
        name="name"
        onChange={handleInputChangeEvent}
      />
      <ContainerForLabel>
        <Label fontSize="15px">Data de fundação</Label>
      </ContainerForLabel>
      <Input
        type="date"
        value={userData.foundationDate}
        name="foundationDate"
        onChange={handleInputChangeEvent}
      />
       <ContainerForLabel>
        <Label fontSize="15px">Cores</Label>
      </ContainerForLabel>    
      <Input
        type="text"
        value={userData.colors.join(', ')}
        name="colors"
        onChange={handleInputChangeEvent}
      />
       <ContainerForLabel>
         <Label fontSize="15px">Tipo de associação</Label>
       </ContainerForLabel>
      <Select
        value={userData.associationType}
        onChange={handleSelectChange}
      >
        {Object.values(EAssociationType).map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </Select>
      <ContainerForLabel>
        <Label fontSize="15px">Membros ativos</Label>
      </ContainerForLabel>
      <Input
        type="text"
        value={userData.activeMembers.toString()}
        name="activeMembers"
        onChange={handleInputChangeEvent}
      />
    </ContainerFields>
     </ContainerFormLeft>
     <ContainerFormRight>
     <ContainerFields>
      <ContainerForLabel>
      <Label fontSize="15px">Endereço</Label>
      </ContainerForLabel>
      <Input
        type="text"
        value={userData.address.addressSite}
        name="addressSite"
        onChange={handleAddressChange}
      />
       <ContainerForLabel>
      <Label fontSize="15px">Número</Label>
      </ContainerForLabel>
      <Input
        type="text"
        value={userData.address.number}
        name="number"
        onChange={handleAddressChange}
      />
       <ContainerForLabel>
      <Label fontSize="15px">Complemento</Label>
      </ContainerForLabel>
      <Input
        type="text"
        value={userData.address.complement}
        name="complement"
        onChange={handleAddressChange}
      />
      <ContainerForLabel>
      <Label fontSize="15px">Bairro</Label>
      </ContainerForLabel>
      <Input
        type="text"
        value={userData.address.district}
        name="district"
        onChange={handleAddressChange}
      />
       <ContainerForLabel>
      <Label fontSize="15px">Cidade</Label>
      </ContainerForLabel>
      <Input
        type="text"
        value={userData.address.city}
        name="city"
        onChange={handleAddressChange}
      />
    </ContainerFields>
     </ContainerFormRight>
     </ContainerAllInputs>
    </>
   
  );
};

export default FirstData;
