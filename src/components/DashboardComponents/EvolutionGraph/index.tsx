import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { EvolutionGraphTitle, EvolutionGraphWrapper } from './styles';

export const EvolutionGraph: React.FC = () => {
  // Dados do gráfico
  const data = [
    { name: '1917', Cadastro: 2 },
    { name: '1927', Cadastro: 13 },
    { name: '1937', Cadastro: 19 },
    { name: '1947', Cadastro: 27 },
    { name: '1957', Cadastro: 41 },
    { name: '1967', Cadastro: 65 },
    { name: '1977', Cadastro: 69 },
    { name: '1987', Cadastro: 80 },
    { name: '1997', Cadastro: 81 },
    { name: '2007', Cadastro: 87 },
    { name: '2017', Cadastro: 92 },
    { name: '2024', Cadastro: 100 },
  ];

  return (
    <EvolutionGraphWrapper>
        <EvolutionGraphTitle>Evolução das agremiações de frevo ao longo dos anos</EvolutionGraphTitle>
        <LineChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Line type="monotone" dataKey="Cadastro" stroke="#27962D" fill="#27962D" />
        </LineChart>
    </EvolutionGraphWrapper>
  );
};
