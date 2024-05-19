/* eslint-disable @typescript-eslint/no-explicit-any */
import { Label } from '../../../../components/Input/style';
import Input from '../../../../components/Input';
import { ContainerFields } from '../../SecondStep/style';
import { createUserFormSchema } from '../../CreateUserFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod'
import { MemberAddEvent } from './style';

export const MemberStepData: React.FC = () => {

    type CreateUserFormData = z.infer<typeof createUserFormSchema>;
    const { register } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFormSchema),
    });

    return (
        <>
            <ContainerFields>
                <Label fontSize="25px">Membros</Label>
                <Label fontSize="15px">Nome do membro</Label>
                <Input type="text" {...register('events.0')} />

                <Label fontSize="15px">Sobrenome do membro</Label>
                <Input type="text" {...register('events.1')} />

                <Label fontSize="15px">Tempo de atuação em meses</Label>
                <Input type="text" {...register('events.2')} />

                <MemberAddEvent>Enviar</MemberAddEvent>
            </ContainerFields>
        </>
    )
}

export default MemberStepData