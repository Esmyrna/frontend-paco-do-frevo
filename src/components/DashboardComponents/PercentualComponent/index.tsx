import { mockData } from "../../../mock/associations"
import { Association } from "./Association"
import { PercentualComponentWrapper } from "./styles"

/**
 * 
 * @returns 
 */
export const PercentualComponent = () => {
    return (
        <PercentualComponentWrapper>
            {mockData.map((item, index) => (
                <Association key={index} associationName={item?.name} associationQuantity={item?.quantity} isGreen={item?.name === 'Total'} />
            ))}
        </PercentualComponentWrapper>
    )
}