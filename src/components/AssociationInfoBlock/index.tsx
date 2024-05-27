import { SimplifiedAssociationDTO } from "../../interfaces/type";
import { separateCamelCase } from "../../utils/masks";
import * as S from './styles'
import { EAssociationType } from "../../interfaces/enum";

import BlockImg from '../../assets/AssociationTypesIcons/bloco.png';
import PuppetClubImg from '../../assets/AssociationTypesIcons/clube-bonecos.png';
import TrocaImg from '../../assets/AssociationTypesIcons/troca.png';
import ClubImg from '../../assets/AssociationTypesIcons/clube.png';
import BaseColors from "../../styleguide/BaseColors";

interface AssociationInfoBlockProps {
    association: SimplifiedAssociationDTO;
}

function iconFactory(associationType: string | EAssociationType) {
    switch (associationType) {
        case EAssociationType.carnivalBlock:
            return {
                icon: BlockImg,
                color: BaseColors.goldishYellow,
            };

        case EAssociationType.puppetClub:
            return {
                icon: PuppetClubImg,
                color: BaseColors.vividGreen,
            };

        case EAssociationType.troca:
            return {
                icon: TrocaImg,
                color: BaseColors.vividRed,
            };

        case EAssociationType.club:
            return {
                icon: ClubImg,
                color: BaseColors.lightBlue,
            };

        default:
            return {
                icon: '',
                color: '#cccccc',
            };
    }
}

const AssociationInfoBlock: React.FC<AssociationInfoBlockProps> = (
    { association }
) => {
    const iconProperties = iconFactory(association.associationType);

    return (
        <S.Association>
            <S.IconContainer color={iconProperties.color}>
                {iconProperties.icon
                    ?
                    <img src={iconProperties.icon} width={'60%'} />
                    :
                    <S.IconSubstitute color={BaseColors.darkBlue}>
                        ?
                    </S.IconSubstitute>}
            </S.IconContainer>

            <S.ContainerInfosAssociation>
                <S.AssociationPropertyBlock isBigContainer={true}>
                    <S.Title>Nome:</S.Title>
                    <S.RegularText>
                        {association.name ?? '-'}
                    </S.RegularText>
                </S.AssociationPropertyBlock>

                <S.AssociationPropertyBlock>
                    <S.Title>Tipo:</S.Title>
                    {separateCamelCase(association.associationType)}
                </S.AssociationPropertyBlock>

                <S.AssociationPropertyBlock>
                    <S.Title>Data de fundação:</S.Title>
                    {association.foundationDate
                        ? new Date(association.foundationDate).toLocaleDateString('pt-BR')
                        : '--/--/----'}
                </S.AssociationPropertyBlock>

                <S.AssociationPropertyBlock>
                    <S.Title>Membros Ativos:</S.Title>
                    {association.activeMembers ?? '0'}
                </S.AssociationPropertyBlock>
            </S.ContainerInfosAssociation>
        </S.Association>
    );
}

export default AssociationInfoBlock;