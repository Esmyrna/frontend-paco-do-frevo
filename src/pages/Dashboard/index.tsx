import { useSearchParams } from "react-router-dom"
import Nav from "../../components/Nav"
import { useEffect, useState } from "react"
import { VisualData } from "../../components/DashboardComponents/VisualData"
import { DashboardContent, DashboardWrapper } from "./styles"

/**
 * Página de exibição do dados cadastrados no banco de dados
 * @returns 
 */
export const Dashboard = (): JSX.Element => {
    const [searchParams, setSearchParams] = useSearchParams()

    const [activePage] = useState(searchParams.get('activePage') || 'visualData')

    const dashboardPages: DashboardPages = {
        visualData: <VisualData />,
        // allData: <AllData />,
    }
    const renderPage = () => {
        switch (activePage) {
            case 'visualData':
                return <VisualData />
            // case 'allData':
            //     return <AllData />
            default:
                return null
        }
    }

    useEffect(() => {
        if (!activePage || !dashboardPages[activePage]) {
            setSearchParams({ activePage: 'visualData'})
        }
    }, [])
    return (
        <DashboardWrapper>
            <Nav />
            <DashboardContent>{renderPage()}</DashboardContent>
        </DashboardWrapper>
    )
}