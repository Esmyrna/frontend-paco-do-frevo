import React from 'react';
import { Label } from '../../../../components/Input/style';
import Input from '../../../../components/Input';
import { useGlobalContext } from '../../../../context';
import { ContainerFields, ContainerFormLeft, ContainerFormRight } from '../../ControlForm/style';
import { ContainerAllInputs, ContainerForLabel } from '../FirstData/style';

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



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value
    }));
  };

  return (
    <>
      <ContainerAllInputs>
        <ContainerFormLeft>
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
        </ContainerFormLeft>
        <ContainerFormRight>
          <ContainerFields>
            <Label fontSize="25px">Continue...</Label>
            <ContainerForLabel>
            <Label fontSize="15px">Estado</Label>
            </ContainerForLabel>
            <Input
              type="text"
              value={userData.address.state}
              name="state"
              onChange={handleAddressChange}
            />
             <ContainerForLabel>
              <Label fontSize="15px">País</Label>
            </ContainerForLabel>
            <Input
              type="text"
              value={userData.address.country}
              name="country"
              onChange={handleAddressChange}
            />
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
          </ContainerFields>
        </ContainerFormRight>
      </ContainerAllInputs>
    </>

  );
};

export default AddressData;
