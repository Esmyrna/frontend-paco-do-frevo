import React, { useState, useEffect } from 'react';
import { Label } from '../../../../components/Input/style';
import Input from '../../../../components/Input';
import { MidiaAddEvent } from './style';

import Select from '../../../../components/Select';
import { SocialNetwork } from '../../../../interfaces/type';
import { useGlobalContext } from '../../../../context';
import { ESocialNetworkType } from '../../../../interfaces/enum';
import { ContainerFields } from '../../ControlForm/style';

export const MidiaStepData: React.FC = () => {
  const { userData, setUserData } = useGlobalContext();

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

  return (
    <ContainerFields>
      <Label fontSize="25px">Redes Sociais</Label>

      <Label fontSize="15px">Tipo de rede social</Label>
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

      <Label fontSize="15px">URL</Label>
      <Input name="url" type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <MidiaAddEvent onClick={addSocialNetwork}>Enviar</MidiaAddEvent>
    </ContainerFields>
  );
};

export default MidiaStepData;
