import Footer from '../../components/Footer'
import Nav from '../../components/Nav'

import AssociationBarTwo from './AssociationBarTwo'

import AssociationChart from './AssociationChart'
import AssociationLineChart from './AssociationLine'
import AssociationPie from './AssociationPie'
import AssociationStackedBarChart from './AssociationStackedBarChart'
import { ContainerGraphChart, ContainerGraphChartTwo, ContainerGraphPie, ContainerGraphStackBarChart, GraphChart, GraphChartTwo, SectionDash, TitleGraph } from './style'

const Dashboard = () => {
    return (
        <>
            <Nav />
            <SectionDash>
                <GraphChart>
                    <ContainerGraphChart>
                        <TitleGraph>Quantidade de associação por membro</TitleGraph>
                        <AssociationChart />
                    </ContainerGraphChart>

                    <ContainerGraphStackBarChart>
                        <TitleGraph>Quantidade de associação com sede própria</TitleGraph>
                        <AssociationStackedBarChart />
                    </ContainerGraphStackBarChart>
                    <ContainerGraphPie>
                        <TitleGraph>Tipo de associação por Estado</TitleGraph>
                        <AssociationPie />
                    </ContainerGraphPie>
                </GraphChart>
                <GraphChartTwo>
                    <ContainerGraphChartTwo>
                        <TitleGraph>Ano de cadastro das agremiações</TitleGraph>
                        <AssociationLineChart />
                    </ContainerGraphChartTwo>
                    <ContainerGraphChartTwo>
                        <TitleGraph>Quantidade por tipo de residência compartilhada</TitleGraph>
                        <AssociationBarTwo />
                    </ContainerGraphChartTwo>
                </GraphChartTwo>
            </SectionDash>
            <Footer />
        </>
    )
}

export default Dashboard