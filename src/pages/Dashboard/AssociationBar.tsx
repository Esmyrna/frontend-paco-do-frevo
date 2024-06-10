import React, { useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler } from 'chart.js';
import { EAssociationType } from '../../interfaces/enum';

Chart.register(Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler);

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

const AssociationRadar: React.FC = () => {
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

    const radarLabels = associations.map(association => association.name);

    const data = {
        labels: radarLabels,
        datasets: [
            {
                label: 'Data de Fundação',
                data: associations.map(association => {
                    const foundationYear = new Date(association.foundationDate).getFullYear();
                    return foundationYear;
                }),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            }
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Ano de cadastro das agremiações no sistema',
            },
        },
        scale: {
            ticks: {
                beginAtZero: false,
                stepSize: 1,
            },
            pointLabels: {
                fontSize: 14,
            },
        },
    };

    return <Radar data={data} options={options} />;
};

export default AssociationRadar;
