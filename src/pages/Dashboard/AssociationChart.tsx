import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { EAssociationType } from '../../interfaces/enum';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


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

const AssociationChart: React.FC = () => {
    const [associations, setAssociations] = useState<Association[]>([]);
    const BASE_URL = "http://localhost:3000";

    const fetchData = async (): Promise<Association> => {
        const response = await axios.get(`${BASE_URL}/associations/paged`);
        console.log('dados', response.data.result)
        setAssociations(response.data.result)
        return response.data.result;
    }



    useEffect(() => {
        fetchData();
    }, []);


    const associationTypeCounts: Record<EAssociationType, number> = {
        [EAssociationType.club]: 0,
        [EAssociationType.troca]: 0,
        [EAssociationType.carnivalBlock]: 0,
        [EAssociationType.puppetClub]: 0,
    };
    
    associations.forEach((association) => {
        if (associationTypeCounts[association.associationType] !== undefined) {
            associationTypeCounts[association.associationType] += 1; 
        }
    });
    
    const data = {
        labels: Object.keys(associationTypeCounts),
        datasets: [
            {
                label: 'Número de Associações',
                data: Object.values(associationTypeCounts),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                ],
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
                text: 'Número de Membros Ativos por Tipo de Associação',
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default AssociationChart;
