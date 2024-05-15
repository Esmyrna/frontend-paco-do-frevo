/* eslint-disable @typescript-eslint/no-explicit-any */
import { Label } from '../../../../components/Input/style';
import Input from '../../../../components/Input';
import { ContainerFields } from '../../SecondStep/style';
import { z } from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserFormSchema } from '../../CreateUserFormSchema';
interface StepsNextAndBack {
    register: any;
    errors: any;
}
export const FirstData: React.FC<StepsNextAndBack> = () => {
    
    type CreateUserFormData = z.infer<typeof createUserFormSchema>;
    const { register, formState: { errors } } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFormSchema),
    });

    return (
        <>
            <ContainerFields>
                <Label fontSize="15px">Nome da agremiação</Label>
                <Input type="text" {...register('name')} />
                {errors.name && <span>{errors.name.message}</span>}
                <Label fontSize="15px">Data de fundação</Label>
                <Input type="date" {...register('foudationDate')} />
                {errors.foudationDate && <span>{errors.foudationDate.message}</span>}
                <Label fontSize="15px">Cores</Label>
                <Input type="text" {...register('colors')} />
                {errors.colors && <span>{errors.colors.message}</span>}
                <Label fontSize="15px">Tipo de associação</Label>
                <Input type="text" {...register('associationType')} />
                {errors.associationType && <span>{errors.associationType?.message}</span>}
                <Label fontSize="15px">Membros ativos</Label>
                <Input type="text" {...register('activeMembers')} />
                {errors.activeMembers && <span>{errors.activeMembers?.message}</span>}
            </ContainerFields>
        </>
    )
}

export default FirstData