import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import { EAssociationType } from '../../interfaces/enum';

Chart.register(Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

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

const AssociationLineChart: React.FC = () => {
    const [associations, setAssociations] = useState<Association[]>([]);
    const BASE_URL = "http://localhost:3000";

    const fetchData = async (): Promise<Association[]> => {
        const response = await axios.get(`${BASE_URL}/associations/paged`);
        console.log('dados', response.data.result);
        setAssociations(response.data.result);
        return response.data.result;
    }

    useEffect(() => {
        fetchData();
    }, []);

    const data = {
        labels: associations.map(association => association.name),
        datasets: [
            {
                label: 'Data de Fundação',
                data: associations.map(association => new Date(association.foundationDate).getFullYear()),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                fill: false,
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
                text: 'Data de Fundação das Associações',
            },
        },
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    stepSize: 1,
                },
                title: {
                    display: true,
                    text: 'Ano de Fundação',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Associação',
                },
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default AssociationLineChart;
