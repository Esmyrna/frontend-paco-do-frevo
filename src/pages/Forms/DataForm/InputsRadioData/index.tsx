import { ContainerFields } from '../../SecondStep/style';
import { z } from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserFormSchema } from '../../CreateUserFormSchema';
import { useState } from 'react';

export const InputRadioData: React.FC = () => {

    type CreateUserFormData = z.infer<typeof createUserFormSchema>;
    const { register, formState: { errors } } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFormSchema),
    });

    const [isLegalEntity, setIsLegalEntity] = useState(false);
    const [hasOwnedHeadquarters, setHasOwnedHeadquarters] = useState(false);
    const [canIssueOwnReceipts, setCanIssueOwnReceipts] = useState(false);

    return (
        <>
            <ContainerFields>
                <label>possui sede propria?</label>
                <label>
                    <input
                        type="radio"
                        value="true"
                        {...register('hasOwnedHeadquarters')}
                        checked={hasOwnedHeadquarters === true}
                        onChange={() => setHasOwnedHeadquarters(true)}
                    />
                    Sim
                </label>

                <label>
                    <input
                        type="radio"
                        value="false"
                        {...register('hasOwnedHeadquarters')}
                        checked={hasOwnedHeadquarters === false}
                        onChange={() => setHasOwnedHeadquarters(false)}
                    />
                    Não
                </label>

                <label>possui receita propria?</label>
                <label>
                    <input
                        type="radio"
                        value="true"
                        {...register('canIssueOwnReceipts')}
                        checked={canIssueOwnReceipts === true}
                        onChange={() => setCanIssueOwnReceipts(true)}
                    />
                    Sim
                </label>

                <label>
                    <input
                        type="radio"
                        value="false"
                        {...register('canIssueOwnReceipts')}
                        checked={canIssueOwnReceipts === false}
                        onChange={() => setCanIssueOwnReceipts(false)}
                    />
                    Não
                </label>

                <label>é uma entidade legal?</label>
                <label>
                    <input
                        type="radio"
                        value="true"
                        {...register('isLegalEntity')}
                        checked={isLegalEntity === true}
                        onChange={() => setIsLegalEntity(true)}
                    />
                    Sim
                </label>

                <label>
                    <input
                        type="radio"
                        value="false"
                        {...register('isLegalEntity')}
                        checked={isLegalEntity === false}
                        onChange={() => setIsLegalEntity(false)}
                    />
                    Não
                </label>

            </ContainerFields>
        </>
    )
}

export default InputRadioData