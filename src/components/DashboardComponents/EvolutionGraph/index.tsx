import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { EvolutionGraphTitle, EvolutionGraphWrapper } from './styles';
import { DecadeCount, EvolutionGraphProps } from './types';
import { IconWrapper } from '../PercentualComponent/styles';
import { LoadingIcon } from '../../icons/LoadingIcon';
import { Entity } from '../../../api/AssociationApi/types';

export const EvolutionGraph: React.FC<EvolutionGraphProps> = ({ responseAssociations }) => {
  const [dataEvolutionGraph, setDataEvolutionGraph] = useState<DecadeCount[]>([
    { name: '1917', Cadastro: 0 },
    { name: '1927', Cadastro: 0 },
    { name: '1937', Cadastro: 0 },
    { name: '1947', Cadastro: 0 },
    { name: '1957', Cadastro: 0 },
    { name: '1967', Cadastro: 0 },
    { name: '1977', Cadastro: 0 },
    { name: '1987', Cadastro: 0 },
    { name: '1997', Cadastro: 0 },
    { name: '2007', Cadastro: 0 },
    { name: '2017', Cadastro: 0 },
    { name: '2024', Cadastro: 0 }
  ]);

  const formatYear = () => {
    const updatedData = [...dataEvolutionGraph];

    responseAssociations?.forEach((item: Entity) => {
      const year = item?.foundationDate?.slice(0, 4); 

      if (Number(year) < 1927) {
        updatedData[0].Cadastro += 1;
      } else if (Number(year) < 1937) {
        updatedData[1].Cadastro += 1;
      } else if (Number(year) < 1947) {
        updatedData[2].Cadastro += 1;
      } else if (Number(year) < 1957) {
        updatedData[3].Cadastro += 1;
      } else if (Number(year) < 1967) {
        updatedData[4].Cadastro += 1;
      } else if (Number(year) < 1977) {
        updatedData[5].Cadastro += 1;
      } else if (Number(year) < 1987) {
        updatedData[6].Cadastro += 1;
      } else if (Number(year) < 1997) {
        updatedData[7].Cadastro += 1;
      } else if (Number(year) < 2007) {
        updatedData[8].Cadastro += 1;
      } else if (Number(year) < 2017) {
        updatedData[9].Cadastro += 1;
      } else {
        updatedData[10].Cadastro += 1;
      }
    });
    setDataEvolutionGraph(updatedData);
  };

  useEffect(() => {
    if (responseAssociations) {
      formatYear();
    }
  }, [responseAssociations]);

  return (
    <EvolutionGraphWrapper>
      <EvolutionGraphTitle>Evolução das agremiações de frevo ao longo dos anos</EvolutionGraphTitle>
        {responseAssociations?.length === 0 ? (
          <IconWrapper>
            <LoadingIcon />
          </IconWrapper>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={dataEvolutionGraph}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="Cadastro" stroke="#27962D" fill="#27962D" />
            </LineChart>
          </ResponsiveContainer>
        )}
    </EvolutionGraphWrapper>
  );
};
