import { Label } from '../../../../components/Input/style';
import Input from '../../../../components/Input';
import { ContainerFields } from '../../SecondStep/style';
import { useForm } from 'react-hook-form';
import { ButtonAddEvent } from './style';
import { useEffect, useState } from 'react';
import { Events } from '../../../../interfaces/type';

export const EventStepData: React.FC = () => {
    const { register, handleSubmit } = useForm<Events>(); // Definindo o tipo de dados do formulário como Events
    const [events, setEvents] = useState<Events[]>([]);

    // Função para lidar com o envio do formulário
    const onSubmit = (data: Events) => {
        const newEvent = {
            eventType: data.eventType || '', // Obtendo o valor do input 'Tipo do evento'
            dateOfAccomplishment: data.dateOfAccomplishment || '', // Obtendo o valor do input 'Data do evento'
            participantsAmount: data.participantsAmount || 0, // Obtendo o valor do input 'Quantidade de participantes'
        };
        setEvents([...events, newEvent]);
        console.log(events);  
    };
    useEffect(() => {
        console.log(events);
    }, [events]);
    return (
        <>
            <ContainerFields>
                <Label fontSize="25px">Novo Evento</Label>

                <Label fontSize="15px">Tipo do evento</Label>
                <Input type="text" {...register('eventType')} />

                <Label fontSize="15px">Data do evento</Label>
                <Input type="date" {...register('dateOfAccomplishment')} />

                <Label fontSize="15px">Quantidade de participantes</Label>
                <Input type="text" {...register('participantsAmount')} />

                <ButtonAddEvent onClick={handleSubmit(onSubmit)}>
                    Adicionar Evento
                </ButtonAddEvent>
            </ContainerFields>
        </>
    );
}

export default EventStepData;
