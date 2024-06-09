import { EvolutionByYearGraph } from "../EvolutionByYearGraph"
import { EvolutionGraph } from "../EvolutionGraph"
import { PercentualComponent } from "../PercentualComponent"
import { LeftSection, RightSection, VisualDataSections, VisualDataWrapper } from "./styles"
import { useEffect, useState } from "react";
import { getAllAssociations } from "../../../api/AssociationApi";
import { AxiosResponse } from "axios";
import { OtherEntitiesGraph } from "../OtherEntitiesGraph";
import { RecentFrevoEntities } from "../RecentFrevoEntities";
import { getOtherFrevoEntities } from "../../../api/OtherEntitiesApi";
import { FrevoEntity } from "../../../api/OtherEntitiesApi/types";
import { DataPoint } from "../OtherEntitiesGraph/types";

export const VisualData = () => {

    const [responseAssociations, setResponseAssociations] = useState<AxiosResponse<any, any> | null>(null);
    const [errorAssociations, setErrorAssociations] = useState<any>(null);
    useEffect(() => {
        const fetchAssociations = async () => {
            const { response, error } = await getAllAssociations({ page: 1, pageSize: 100 });
            setResponseAssociations(response?.data?.result);
            setErrorAssociations(error);
            if (error) {
                console.error('Erro:', error);
            }
        };

        fetchAssociations();
    }, []);

    /** Estado para armazenar os dados do gráfico de outras entidades */
    const [dataOtherEntities, setDataOtherEntities] = useState<DataPoint[]>([]);

    /** Estado para armazenar os dados da listagem de outras entidades */
    const [recentOtherEntities, setRecentOtherEntites] = useState<FrevoEntity[]>([])

    /** Estado para armazenar o status da resposta da API */
    const [otherEntitiesStatus, setOtherEntitiesStatus] = useState<number>(0);

    // buscar os dados da api
    useEffect(() => {
        const fetchData = async () => {
        const { response, error } = await getOtherFrevoEntities();
        setOtherEntitiesStatus(response?.status || 0);
        setRecentOtherEntites(response?.data)

        if (response?.status === 200) {
            const entities: FrevoEntity[] = response?.data;
            const typeCounts: Record<string, number> = {};

            // Contar a quantidade de entidades para cada tipo
            entities?.forEach((entity) => {
            if (typeCounts[entity.type]) {
                typeCounts[entity.type]++;
            } else {
                typeCounts[entity.type] = 1;
            }
            });

            const chartData: DataPoint[] = Object.keys(typeCounts).map((type) => ({
            type: type,
            count: typeCounts[type],
            }));

            setDataOtherEntities(chartData);
        }
        };

        fetchData();
    }, []);

    return (
        <VisualDataWrapper>
            <PercentualComponent responseAssociations={responseAssociations} />
            <VisualDataSections>
                <LeftSection>
                    <EvolutionGraph responseAssociations={responseAssociations} />
                    <EvolutionByYearGraph responseAssociations={responseAssociations}/>
                </LeftSection>
                <RightSection>
                    <OtherEntitiesGraph dataOtherEntities={dataOtherEntities} otherEntitiesStatus={otherEntitiesStatus} />
                    <RecentFrevoEntities dataOtherEntities={recentOtherEntities} otherEntitiesStatus={otherEntitiesStatus} />
                </RightSection>
            </VisualDataSections>
            
        </VisualDataWrapper>
    )
}