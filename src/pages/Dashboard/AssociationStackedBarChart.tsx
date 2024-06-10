import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement, RadarController } from 'chart.js';
import { EAssociationType } from '../../interfaces/enum';
 

Chart.register(Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement, RadarController);

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

const AssociationStackedBarChart: React.FC = () => {
    const [associations, setAssociations] = useState<Association[]>([]);

    const fetchData = async (): Promise<Association[]> => {
        const response = await axios.get(`${import.meta.env.REACT_APP_API_URL}/associations/paged`);
        console.log('dados', response.data.result)
        setAssociations(response.data.result)
        return response.data.result;
    }

    useEffect(() => {
        fetchData();
    }, []);

    const ownedHeadquartersCounts = associations.reduce((acc, association) => {
        if (association.hasOwnedHeadquarters) {
            acc.owned++;
        } else {
            acc.notOwned++;
        }
        return acc;
    }, { owned: 0, notOwned: 0 });

    const data = {
        labels: ['Quantidade de Associações'],
        datasets: [
            {
                label: 'Possui Sede Própria',
                data: [ownedHeadquartersCounts.owned],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: 'Não Possui Sede Própria',
                data: [ownedHeadquartersCounts.notOwned],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
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
                text: 'Quantidade de Associações com Sede Própria',
            },
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default AssociationStackedBarChart;
