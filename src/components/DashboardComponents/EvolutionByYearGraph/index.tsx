import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import Dropdown from '../../Dropdown';
import { EvolutionByYearWrapper, GraphTitleWrapper, NoDataMessage } from './styles';
import { EvolutionGraphTitle } from '../EvolutionGraph/styles';
import { DecadaDados, EvolutionByYearGraphProps } from './types';
import { Entity } from '../../../api/AssociationApi/types';

/**
 * Gráfico de evolução dos dados ao longo das décadas
 * @returns 
 */
export const EvolutionByYearGraph: React.FC<EvolutionByYearGraphProps> = ({ responseAssociations }) => {
    /** Estado que controla a década selecionada no dropdown para exibir os dados */
    const [decade, setDecade] = useState('1910s');
    /** Estado que controla os dados processados */
    const [dados, setDados] = useState<DecadaDados[]>([]);

    /** Décadas dos registros */
    const decades = [
        '1910s', '1920s', '1930s', '1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'
    ];

    /** Opções a ser exibidas no dropdown */
    const decadeOptions = decades.map((decade) => ({
        value: decade,
        label: decade
    }));

    /** Processa os dados de responseAssociations */
    const processDecadeData = () => {
        const decadaMap: { [key: string]: DecadaDados['registros'] } = {};

        responseAssociations?.forEach((item: Entity) => {
            const year = item?.foundationDate?.slice(0, 4);
            const type = item?.associationType?.toLowerCase();
            const decade = `${Math.floor(Number(year) / 10) * 10}s`;

            if (!decadaMap[decade]) {
                decadaMap[decade] = { clube: 0, bloco: 0, troca: 0, clubeDeBonecos: 0, outros: 0 };
            }

            decadaMap[decade][type] = (decadaMap[decade][type] || 0) + 1;
        });

        const decadaArray = Object.keys(decadaMap).map(decade => ({
            decada: decade,
            registros: decadaMap[decade]
        }));

        setDados(decadaArray);
    };

    useEffect(() => {
        if (responseAssociations) {
            processDecadeData();
        }
    }, [responseAssociations]);

    /** Dados referente as décadas de registro */
    const decadeData = dados.find(item => item.decada === decade);
    const decadeRegisters = decadeData ? Object.entries(decadeData.registros).map(([nome, valor]) => ({
        nome,
        valor
    })) : [];

    /** Seleciona a década no dropdown e mostra no gráfico */
    const handleSelect = (value: string) => {
        setDecade(value);
    };

    return (
        <EvolutionByYearWrapper>
            <GraphTitleWrapper>
                <EvolutionGraphTitle>Evolução de agremiações por década</EvolutionGraphTitle>
                <Dropdown options={decadeOptions} onSelect={handleSelect} />
            </GraphTitleWrapper>
            {decadeRegisters.length === 0 ? (
                <NoDataMessage>Não foram encontrados registros para a década selecionada</NoDataMessage>
            ) : (
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={decadeRegisters}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="nome" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="valor" fill="#00377B" />
                    </BarChart>
                </ResponsiveContainer>
            )}
        </EvolutionByYearWrapper>
    );
};
