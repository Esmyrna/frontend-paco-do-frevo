import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { EAssociationType } from '../../interfaces/enum';
import { ArcElement } from 'chart.js';
Chart.register(Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement, ArcElement);
 
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

const AssociationPie: React.FC = () => {
    const [associations, setAssociations] = useState<Association[]>([]);
    const BASE_URL = "https://pacodofrevoapi1-6ka9yo5l.b4a.run"
    const fetchData = async (): Promise<void> => {
        try {
            const response = await axios.get(`${BASE_URL}/associations/paged`);
            setAssociations(response.data.result);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const countAssociationsByState = () => {
        const counts: Record<string, number> = {};
    
        associations.forEach((association) => {
            const state = association.address.state;
            counts[state] = (counts[state] || 0) + 1;
        });
    
        return counts;
    };
    
    const associationsByState = countAssociationsByState();
    
    const data = {
        labels: Object.keys(associationsByState),
        datasets: [
            {
                label: 'Número de Associações por Estado',
                data: Object.values(associationsByState),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    
                ],
            },
        ],
    };
    
    

    const config = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: false,
                text: 'Distribuição dos Tipos de Associação',
            },
        },
    };

    return <Doughnut data={data} options={config} />;
};

export default AssociationPie;
