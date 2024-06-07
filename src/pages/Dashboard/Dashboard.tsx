// Dashboard.tsx
import React, { useState, useEffect } from 'react';
import Nav from '../../components/Nav';
import axios from 'axios';
import PieChart from './PieChart';
import BarChart from './BarChart';
import { UserData, useGlobalContext } from '../../context';
import { ContainerDashBoardBar, ContainerDashBoardPie, ContainerDashboards } from './style';
import { Chart } from 'chart.js';
import { BarElement, CategoryScale, LinearScale, BarController, Tooltip, ArcElement } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale, BarController, Tooltip, ArcElement); // Registre o ArcElement

const Dashboard: React.FC = () => {
    const [associationData, setAssociationData] = useState<UserData[]>([]);
    const { userData } = useGlobalContext();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get("http://localhost:3000/associations");
                setAssociationData(data);
                console.log(data)
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };
        fetchData();
    }, []);

    const countAssociationTypes = () => {
        const typeCounts: { [key: string]: number } = {};

        associationData.forEach((association: typeof userData) => {
            const associationType = association.associationType;
            if (associationType in typeCounts) {
                typeCounts[associationType]++;
            } else {
                typeCounts[associationType] = 1;
            }
        });

        return typeCounts;
    };

    const calculateFoudationDate =  () => {
        const foundationDateCounts: { [key: string]: number } = {};

        associationData.forEach((association: UserData) => {
            const foundationYear = association?.foundationDate.substring(0, 4);
            if (foundationYear in foundationDateCounts) {
                foundationDateCounts[foundationYear]++;
            } else {
                foundationDateCounts[foundationYear] = 1;
            }
        });

        return foundationDateCounts;
    };


    return (
        <div>
            <Nav />
            <ContainerDashboards>
                <ContainerDashBoardPie>
                    <PieChart data={calculateFoudationDate()} />
                </ContainerDashBoardPie>
                <ContainerDashBoardBar>
                    <BarChart data={countAssociationTypes()} />
                </ContainerDashBoardBar>
            </ContainerDashboards>
        </div>
    );
};

export default Dashboard;
