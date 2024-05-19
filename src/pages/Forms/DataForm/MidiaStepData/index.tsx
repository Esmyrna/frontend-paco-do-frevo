import React, { useState } from 'react';
import { Label } from '../../../../components/Input/style';
import Input from '../../../../components/Input';
import { ContainerFields } from '../../SecondStep/style';

import { MidiaAddEvent } from './style';
import { SocialNetwork } from '../../../../interfaces/type';

export const MidiaStepData: React.FC = () => {

    const [socialNetworks, setSocialNetworks] = useState<SocialNetwork[]>([
        { socialNetworkType: '', url: '' }
    ]);

    const handleSocialNetworkChange = (index: number, field: keyof SocialNetwork, value: string) => {
        const updatedNetworks = [...socialNetworks];
        updatedNetworks[index][field] = value;
        setSocialNetworks(updatedNetworks);
    };

    const addSocialNetwork = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        setSocialNetworks([...socialNetworks, { socialNetworkType: '', url: '' }]);
        console.log(socialNetworks)
    };
    return (
        <>
            <ContainerFields>
                <Label fontSize="25px">Redes Sociais</Label>


                <Label fontSize="15px">Tipo de rede social</Label>
                <Input
                    type="text"
                    value={socialNetworks[0].socialNetworkType}
                    onChange={(e) => handleSocialNetworkChange(0, 'socialNetworkType', e.target.value)}
                />

                <Label fontSize="15px">URL</Label>
                <Input
                    type="text"
                    value={socialNetworks[0].url}
                    onChange={(e) => handleSocialNetworkChange(0, 'url', e.target.value)}
                />

                <MidiaAddEvent onClick={addSocialNetwork}>Enviar</MidiaAddEvent>
            </ContainerFields>
        </>
    );
};

export default MidiaStepData;
