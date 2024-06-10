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
    const BASE_URL = "https://pacodofrevoapi1-6ka9yo5l.b4a.run"
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
                    'rgba(18, 42, 131, 0.915)',
                    'rgba(247, 247, 6, 0.7)',
                    'rgba(235, 4, 4, 0.918)',
                    'rgba(27, 183, 3, 0.905)',
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
