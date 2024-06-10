import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { EAssociationType } from '../../interfaces/enum';
 

Chart.register(Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

interface Association {
    name: string;
    foundationDate: string;
    colors: string[];
    associationType: EAssociationType;
    activeMembers: number;
    isSharedWithAResidence: boolean;
    hasOwnedHeadquarters: boolean;
    isLegalEntity: boolean;
    cnpj: string;
    canIssueOwnReceipts: boolean;
    associationHistoryNotes: string;
    address: {
        addressSite: string;
        number: string;
        complement: string;
        district: string;
        city: string;
        state: string;
        country: string;
        zipCode: string;
    };
    socialNetworks: Array<{
        socialNetworkType: string;
        url: string;
    }>;
    events: Array<{
        eventType: string;
        dateOfAccomplishment: string;
        participantsAmount: number;
    }>;
    members: Array<{
        name: string;
        surname: string;
        role: string;
        actuationTimeInMonths: number;
        isFrevoTheMainRevenueIncome: boolean;
    }>;
    contacts: Array<{
        addressTo: string;
        email: string;
        phoneNumbers: Array<{
            countryCode: string;
            areaCode: string;
            number: string;
        }>;
    }>;
}

const AssociationBarChart: React.FC = () => {
    const [associations, setAssociations] = useState<Association[]>([]);
    const BASE_URL = "https://pacodofrevoapi1-6ka9yo5l.b4a.run"
    const fetchData = async (): Promise<Association[]> => {
        const response = await axios.get(`${BASE_URL}/associations/paged`);
        console.log('dados', response.data.result);
        setAssociations(response.data.result);
        return response.data.result;
    }

    useEffect(() => {
        fetchData();
    }, []);

    const sharedResidenceCounts = associations.reduce((acc, association) => {
        if (association.isSharedWithAResidence) {
            acc.shared++;
        } else {
            acc.notShared++;
        }
        return acc;
    }, { shared: 0, notShared: 0 });

    const data = {
        labels: ['Compartilha Residência', 'Não Compartilha Residência'],
        datasets: [
            {
                label: 'Quantidade de Associações',
                data: [sharedResidenceCounts.shared, sharedResidenceCounts.notShared],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: false,
                text: 'Quantidade de Associações que Compartilham Residência',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Quantidade',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Tipo de Residência',
                },
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default AssociationBarChart;
