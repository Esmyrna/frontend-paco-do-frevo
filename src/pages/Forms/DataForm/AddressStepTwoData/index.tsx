import React from 'react';
import { Label } from '../../../../components/Input/style';
import Input from '../../../../components/Input';
import { useGlobalContext } from '../../../../context';
import { ContainerFields } from '../../ControlForm/style';

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
        <ContainerFields>
            <Label fontSize="25px">Continue...</Label>
            <Label fontSize="15px">Estado</Label>
            <Input
                type="text"
                value={userData.address.state}
                name="state"
                onChange={handleAddressChange}
            />
            <Label fontSize="15px">País</Label>
            <Input
                type="text"
                value={userData.address.country}
                name="country"
                onChange={handleAddressChange}
            />
            <Label fontSize="15px">CEP</Label>
            <Input
                type="text"
                value={userData.address.zipCode}
                name="zipCode"
                onChange={handleAddressChange}
            />
            <Label fontSize="15px">CNPJ</Label>
            <Input
                type="text"
                value={userData.cnpj}
                name="cnpj"
                onChange={handleInputChange}
            />
        </ContainerFields>
    );
};

export default AddressData;
