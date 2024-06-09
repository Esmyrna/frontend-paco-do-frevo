import Nav from "../../components/Nav"
import { VisualData } from "../../components/DashboardComponents/VisualData"
import { DashboardContent, DashboardWrapper } from "./styles"

/**
 * Página de exibição do dados cadastrados no banco de dados
 * @returns 
 */
export const Dashboard = (): JSX.Element => {
    return (
        <DashboardWrapper>
            <Nav />
            <DashboardContent>
                <VisualData />
            </DashboardContent>
        </DashboardWrapper>
    )
}