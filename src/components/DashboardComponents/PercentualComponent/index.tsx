import { useEffect, useState } from "react";
import { Association } from "./Association";
import { PercentualComponentWrapper } from "./styles";
import { DataAssociationsProps, PercentualComponentProps } from "./types";

/**
 * Função que exibe a quantidade de agramiações cadastradas
 * @param responseAssociations: array de agremiações cadastradas
 * @returns um elemento JSX
 */
export const PercentualComponent = ({responseAssociations}: PercentualComponentProps) => {
    const [dataAssociations, setDataAssociations] = useState<DataAssociationsProps[]>([
        { name: 'Clube', quantity: 0 },
        { name: 'Troça', quantity: 0 },
        { name: 'Bloco', quantity: 0 },
        { name: 'C. Bonecos', quantity: 0 },
        { name: 'Outros', quantity: 0 },
        { name: 'Total', quantity: 0 },
    ]);

    const dataFormat = (result: any[]) => {
        const newDataAssociations = [
            { name: 'Clube', quantity: 0 },
            { name: 'Troça', quantity: 0 },
            { name: 'Bloco', quantity: 0 },
            { name: 'C. Bonecos', quantity: 0 },
            { name: 'Outros', quantity: 0 },
            { name: 'Total', quantity: 0 },
        ];

        result?.map((item) => {
            if (item?.associationType === 'Clube') {
                newDataAssociations[0].quantity += 1;
            } else if (item?.associationType === 'Troça') {
                newDataAssociations[1].quantity += 1;
            } else if (item?.associationType === 'Bloco carnavalesco') {
                newDataAssociations[2].quantity += 1;
            } else if (item?.associationType === 'Clube de bonecos') {
                newDataAssociations[3].quantity += 1;
            } else {
                newDataAssociations[4].quantity += 1;
            }
        });
        newDataAssociations[5].quantity = result?.length || 0;

        setDataAssociations(newDataAssociations);
    };

    useEffect(() => {
        dataFormat(responseAssociations);
    }, [responseAssociations])

    return (
        <PercentualComponentWrapper>
            {dataAssociations?.map((item, index) => (
                <Association key={index} associationName={item?.name} associationQuantity={item?.quantity} isGreen={item?.name === 'Total'} />
            ))}
        </PercentualComponentWrapper>
    );
};
