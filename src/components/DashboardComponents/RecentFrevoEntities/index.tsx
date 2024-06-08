import React from "react"
import { RecentFrevoEntitiesProps } from "./types"
import { NewEntity } from "./NewEntity"
import { NewEntitiesWrapper, RecentFrevoEntitesTitle, RecentFrevoEntitiesWrapper, TitleName } from "./styles"

/**
 * Componente de lista das últimas entidades cadrastradas
 */
export const RecentFrevoEntities: React.FC<RecentFrevoEntitiesProps> = ({ dataOtherEntities, otherEntitiesStatus }) => {
    return (
        <RecentFrevoEntitiesWrapper>
            <RecentFrevoEntitesTitle>
                <TitleName>Últimas entidades de frevo cadastradas</TitleName>
            </RecentFrevoEntitesTitle>
            {otherEntitiesStatus === 200 ? (
                <NewEntitiesWrapper>
                    {dataOtherEntities?.map((item, index) => (
                        <div key={index}>
                            {index < 5 && (
                                <NewEntity key={index} name={item?.name} type={item?.type} />
                            )}
                        </div>
                    ))}
                </NewEntitiesWrapper>
            ) : (
                <span>Não há dados a serem exibidos</span>
                // <NewEntitiesWrapper>
                //     <NewEntity name="teste" type="1"/>
                //     <NewEntity name="teste" type="1"/>
                //     <NewEntity name="teste" type="1"/>
                //     <NewEntity name="teste" type="1"/>
                //     <NewEntity name="teste" type="1"/>
                //     <NewEntity name="teste" type="1"/>
                // </NewEntitiesWrapper>
            )}
        </RecentFrevoEntitiesWrapper>
    )
}
