import React from 'react';
import { Label } from '../../../../components/Input/style';
import Input from '../../../../components/Input';
import Select from '../../../../components/Select';
import { ContainerFields } from '../../SecondStep/style';
import { useGlobalContext } from '../../../../context';
import { EAssociationType } from '../../../../interfaces/enum';

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
    <ContainerFields>
      <Label fontSize="15px">Nome da agremiação</Label>
      <Input
        type="text"
        value={userData.name}
        name="name"
        onChange={handleInputChangeEvent}
      />
      <Label fontSize="15px">Data de fundação</Label>
      <Input
        type="date"
        value={userData.foundationDate}
        name="foundationDate"
        onChange={handleInputChangeEvent}
      />
      <Label fontSize="15px">Cores</Label>
      <Input
        type="text"
        value={userData.colors.join(', ')}
        name="colors"
        onChange={handleInputChangeEvent}
      />
      <Label fontSize="15px">Tipo de associação</Label>
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
      <Label fontSize="15px">Membros ativos</Label>
      <Input
        type="text"
        value={userData.activeMembers.toString()}
        name="activeMembers"
        onChange={handleInputChangeEvent}
      />
    </ContainerFields>
  );
};

export default FirstData;
