import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { dados } from '../../../mock/decadaRegister';
import { useState } from 'react';
import Dropdown from '../../Dropdown';
import { EvolutionByYearWrapper, GraphTitleWrapper } from './styles';
import { EvolutionGraphTitle } from '../EvolutionGraph/styles';

/**
 * Gráfico de evolução dos dados ao longo das décadas
 * @returns 
 */
export const EvolutionByYearGraph = () => {
    /** Estado que controla a década selecionada no dropdown para exibir os dados */
    const [decade, setDecade] = useState('1910s')
    /** Décadas dos registros */
    const decades = [
        '1910s', '1920s', '1930s','1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'
      ];
    
    /** Opções a ser exibidas no dropdown */
    const decadeOptions = decades.map((decade) => ({
    value: decade,
    label: decade
    }));

    /** Dados referente as décadas de registro */
    const decadeData = dados.find(item => item.decada === decade);
    const decadeRegisters = decadeData ? Object.entries(decadeData.registros).map(([nome, valor]) => ({
        nome,
        valor
    })) : [];

    /** Seleciona a década no dropdown e mostra no gráfico */
    const handleSelect = (value: string) => {
        setDecade(value)
    }

    return (
        <EvolutionByYearWrapper>
            <GraphTitleWrapper>
                <EvolutionGraphTitle>Evolução de agremiações por década</EvolutionGraphTitle>
                <Dropdown options={decadeOptions} onSelect={handleSelect} />
            </GraphTitleWrapper>
            <BarChart width={600} height={300} data={decadeRegisters}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="nome" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="valor" fill="#00377B" />
            </BarChart>
        </EvolutionByYearWrapper>
    );
}