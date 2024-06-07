// PieChart.tsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Title } from '../../../components/Title/style';
import { Container } from '../style';
 
interface Props {
    data: { [key: string]: number };
}

const PieChart: React.FC<Props> = ({ data }) => {
    const labels = Object.keys(data);
    const counts = Object.values(data);

    const pieData = {
        labels: labels,
        datasets: [
            {
                label: 'Quantidade de agremiações por data de fundação',
                data: counts,
                backgroundColor: [
                    'rgb(218, 39, 8)',
                    'rgba(26, 130, 12, 0.966)',
                    'rgba(13, 10, 118, 0.964)',
                    'rgba(45, 194, 4, 0.832)',
                    'rgb(186, 186, 186)',
                    'rgba(255, 159, 64, 0.5)',
                ],
                borderColor: [
                    '#be0404',
                    '#15640b',
                    '#12035c',
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
            <Title Size="18px" textAlign="start" color={'#00377b'}>Distribuição por data de fundação</Title>
            <Pie data={pieData} />
        </Container>
    );
};

export default PieChart;
