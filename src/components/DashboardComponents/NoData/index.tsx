import { NoDataMessage, NoDataWrapper } from "./styles"
import { NoDataProps } from "./types"

export const NoData: React.FC<NoDataProps> = ({message}) => {
    return (
        <NoDataWrapper>
            <NoDataMessage>{message}</NoDataMessage>
        </NoDataWrapper>
    )
}