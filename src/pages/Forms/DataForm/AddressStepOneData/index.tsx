import React from 'react';
import { Label } from '../../../../components/Input/style';
import Input from '../../../../components/Input';
import { ContainerFields } from '../../SecondStep/style';
import { useGlobalContext } from '../../../../context';

const AddressData: React.FC = () => {
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

  return (
    <ContainerFields>
      <Label fontSize="15px">Endereço</Label>
      <Input
        type="text"
        value={userData.address.addressSite}
        name="addressSite"
        onChange={handleAddressChange}
      />
      <Label fontSize="15px">Número</Label>
      <Input
        type="text"
        value={userData.address.number}
        name="number"
        onChange={handleAddressChange}
      />
      <Label fontSize="15px">Complemento</Label>
      <Input
        type="text"
        value={userData.address.complement}
        name="complement"
        onChange={handleAddressChange}
      />
      <Label fontSize="15px">Bairro</Label>
      <Input
        type="text"
        value={userData.address.district}
        name="district"
        onChange={handleAddressChange}
      />
      <Label fontSize="15px">Cidade</Label>
      <Input
        type="text"
        value={userData.address.city}
        name="city"
        onChange={handleAddressChange}
      />
      
    </ContainerFields>
  );
};

export default AddressData;
