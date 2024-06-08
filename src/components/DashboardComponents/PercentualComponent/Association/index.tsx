import React, { useState, useEffect } from "react";
import { AssociationQuantity, AssociationText, AssociationWrapper } from "./styles";

export const Association: React.FC<AssociationProps> = ({
    associationName,
    associationQuantity,
    isGreen
}) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <AssociationWrapper>
            <AssociationText isGreen={isGreen} isMobile={isMobile}>{associationName}</AssociationText>
            <AssociationQuantity isGreen={isGreen} isMobile={isMobile}>
                <AssociationText isGreen={isGreen} isMobile={isMobile}>{associationQuantity}</AssociationText>
            </AssociationQuantity>
        </AssociationWrapper>
    );
}