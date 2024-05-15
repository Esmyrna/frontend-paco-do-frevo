/* eslint-disable @typescript-eslint/no-explicit-any */
import { Label } from '../../../../components/Input/style';
import Input from '../../../../components/Input';
import { ContainerFields } from '../../SecondStep/style';
import InputBigText from '../../../../components/TextArea';

interface StepsNextAndBack {
    register: any;
    errors: any;
}
export const AddressData: React.FC<StepsNextAndBack> = ({ register, errors }) => {

    return (
        <>
            <ContainerFields>
                <Label fontSize="15px">CNPJ</Label>
                <Input type="text" {...register('cnpj')} />
                {errors.cnpj && <span>{errors.cnpj?.message}</span>}
                <Label fontSize="15px">Historia da agremiação</Label>
                <InputBigText {...register('address')} />
                {errors.associationHistoryNotes && <span>{errors.associationHistoryNotes?.message}</span>}
                <Label fontSize="15px">Endereço</Label>
                <Input type="text" {...register('address')} />
                {errors.address && <span>{errors.address?.message}</span>}
                <Label fontSize="15px">Número</Label>
                <Input type="text" {...register('address.number')} />
                {errors.address?.number && <span>{errors.address?.number?.message}</span>}
                <Label fontSize="15px">Complemento</Label>
                <Input type="text" {...register('address.complement')} />
                {errors.address?.complement && <span>{errors.address?.complement.message}</span>}
            </ContainerFields>
        </>
    )
}

export default AddressData