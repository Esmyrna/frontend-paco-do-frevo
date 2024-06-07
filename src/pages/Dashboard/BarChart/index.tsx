// BarChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Title } from '../../../components/Title/style';
import { Container } from '../style';

interface Props {
    data: { [key: string]: number }; // Defina a propriedade de dados apropriada
}

const BarChart: React.FC<Props> = ({ data }) => {
    const labels = Object.keys(data);
    const counts = Object.values(data);

    const barData = {
        labels: labels,
        datasets: [
            {
                label: 'Número de Agregações por Tipo',
                data: counts,
                backgroundColor: [
                    'rgb(218, 39, 8)',
                    'rgba(22, 5, 121, 0.966)',
                    'rgba(244, 181, 24, 0.964)',
                    'rgba(45, 194, 4, 0.832)',
                    'rgb(186, 186, 186)',
                    'rgba(255, 159, 64, 0.5)',
                ],
                borderColor: [
                    '#be0404',
                    '#0b4164',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <Container>
            <Title Size="18px" textAlign="start" color={'#00377b'}>Distribuição do tipo de associação</Title>
            <Bar data={barData} />
        </Container>
    );
};

export default BarChart;
