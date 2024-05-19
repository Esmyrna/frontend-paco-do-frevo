/* eslint-disable @typescript-eslint/no-explicit-any */
import { Label } from '../../../../components/Input/style';
import Input from '../../../../components/Input';
import { ContainerFields } from '../../SecondStep/style';
import { createUserFormSchema } from '../../CreateUserFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod'
import { ContactsAddEvent } from './style';

export const ContactsStepData: React.FC = () => {

    type CreateUserFormData = z.infer<typeof createUserFormSchema>;
    const { register } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFormSchema),
    });

    return (
        <>
            <ContainerFields>
                <Label fontSize="25px">Contatos</Label>
                <Label fontSize="15px">Endereço para</Label>
                <Input type="text" {...register('events.0')} />

                <Label fontSize="15px">Email</Label>
                <Input type="text" {...register('events.1')} />


                <Label fontSize="15px">DDD</Label>
                <Input type="text" {...register('events.2')} />

                <Label fontSize="15px">Número</Label>
                <Input type="text" {...register('events.2')} />


                <ContactsAddEvent>Enviar</ContactsAddEvent>
            </ContainerFields>
        </>
    )
}

export default ContactsStepData