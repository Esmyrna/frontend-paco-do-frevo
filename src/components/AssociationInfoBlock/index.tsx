import { SimplifiedAssociationDTO } from "../../interfaces/type";
import { separateCamelCase } from "../../utils/masks";
import * as Styles from './styles'

interface AssociationInfoBlockProps {
    association: SimplifiedAssociationDTO;
}

const AssociationInfoBlock: React.FC<AssociationInfoBlockProps> = (
    { association }
) => {
    return (
        <Styles.Association>
            <Styles.ContainerInfosAssociation>
                <Styles.AssociationPropertyBlock>
                    <Styles.Title>Nome:</Styles.Title>
                    {separateCamelCase(association.name)}
                </Styles.AssociationPropertyBlock>

                <Styles.AssociationPropertyBlock>
                    <Styles.Title>Tipo:</Styles.Title>
                    {separateCamelCase(association.associationType)}
                </Styles.AssociationPropertyBlock>

                <Styles.AssociationPropertyBlock>
                    <Styles.Title>Data de fundação:</Styles.Title>
                    {association.foundationDate
                        ? new Date(association.foundationDate).toLocaleDateString('pt-BR')
                        : 'Data não disponível'}
                </Styles.AssociationPropertyBlock>

                <Styles.AssociationPropertyBlock>
                    <Styles.Title>Membros Ativos:</Styles.Title>
                    {association.activeMembers ?? '0'}
                </Styles.AssociationPropertyBlock>
            </Styles.ContainerInfosAssociation>
        </Styles.Association>
    );
}

export default AssociationInfoBlock;