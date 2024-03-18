import { EvolutionByYearGraph } from "../EvolutionByYearGraph"
import { EvolutionGraph } from "../EvolutionGraph"
import { PercentualComponent } from "../PercentualComponent"
import { LeftSection, VisualDataSections, VisualDataWrapper } from "./styles"

export const VisualData = () => {
    return (
        <VisualDataWrapper>
            <PercentualComponent />
            <VisualDataSections>
                <LeftSection>
                    <EvolutionGraph />
                    <EvolutionByYearGraph />
                </LeftSection>
                <div>
                    {/* Espaço para colocar a lista das 10 últimas agremiações */}
                </div>
            </VisualDataSections>
            
        </VisualDataWrapper>
    )
}