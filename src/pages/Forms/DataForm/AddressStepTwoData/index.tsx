/* eslint-disable @typescript-eslint/no-explicit-any */
import { Label } from '../../../../components/Input/style';
import Input from '../../../../components/Input';
import { ContainerFields } from '../../SecondStep/style';
import { createUserFormSchema } from '../../CreateUserFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod'


export const AddressStepTwoData: React.FC = () => {

       
    type CreateUserFormData = z.infer<typeof createUserFormSchema>;
    const { register, formState: { errors } } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFormSchema),
    });


    return (
        <>
            <ContainerFields>
                <Label fontSize="15px">Bairro</Label>
                <Input type="text" {...register('address.district')} />
                {errors.name && <span>{errors.name.message}</span>}
                <Label fontSize="15px">Cidade</Label>
                <Input type="date" {...register('address.city')} />
                {errors.foudationDate && <span>{errors.foudationDate.message}</span>}
                <Label fontSize="15px">Estado</Label>
                <Input type="text" {...register('address.state')} />
                {errors.colors && <span>{errors.colors.message}</span>}
                <Label fontSize="15px">País</Label>
                <Input type="text" {...register('address.country')} />
                {errors.associationType && <span>{errors.associationType?.message}</span>}
                <Label fontSize="15px">CEP</Label>
                <Input type="text" {...register('address.zipCode')} />
                {errors.associationType && <span>{errors.associationType?.message}</span>}
            </ContainerFields>
        </>
    )
}

export default AddressStepTwoData