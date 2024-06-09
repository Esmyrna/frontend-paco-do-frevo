import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import { NoDataMessage, OtherEntitiesGraphTitle, OtherEntitiesGraphWrapper } from './styles';
import { OtherEntitiesGraphProps} from './types';


/**
 * Gráfico de outras entidades de frevo
 */
export const OtherEntitiesGraph: React.FC<OtherEntitiesGraphProps> = ({dataOtherEntities, otherEntitiesStatus}) => {
    return (
        <OtherEntitiesGraphWrapper>
            <OtherEntitiesGraphTitle>Outras entidades de frevo cadastradas</OtherEntitiesGraphTitle>
            {otherEntitiesStatus !== 200 ? (
                    <NoDataMessage>Ainda não há dados para serem exibidos</NoDataMessage>
            ) : (
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={dataOtherEntities}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="type" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#27962D" />
                    </BarChart>
                </ResponsiveContainer>
            )}
        </OtherEntitiesGraphWrapper>
    );
};
