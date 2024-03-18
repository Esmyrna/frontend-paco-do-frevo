import { AssociationQuantity, AssociationText, AssociationWrapper } from "./styles";

interface AssociationProps {
    associationName: string;
    associationQuantity: number;
    isGreen?: boolean;
}

export const Association: React.FC<AssociationProps> = ({
    associationName,
    associationQuantity,
    isGreen
}) => {
    return (
        <AssociationWrapper>
            <AssociationText isGreen={isGreen}>{associationName}</AssociationText>
            <AssociationQuantity isGreen={isGreen}>
                <AssociationText isGreen={isGreen}>{associationQuantity}</AssociationText>
            </AssociationQuantity>
        </AssociationWrapper>
    )
}