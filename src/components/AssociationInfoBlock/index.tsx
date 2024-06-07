import { SimplifiedAssociationDTO } from "../../interfaces/type";
import { separateCamelCase } from "../../utils/masks";
import * as S from './styles'
import { EAssociationType } from "../../interfaces/enum";
import BlockImg from '../../assets/AssociationTypesIcons/bloco.png';
import PuppetClubImg from '../../assets/AssociationTypesIcons/clube-bonecos.png';
import TrocaImg from '../../assets/AssociationTypesIcons/troca.png';
import ClubImg from '../../assets/AssociationTypesIcons/clube.png';
import BaseColors from "../../styleguide/BaseColors";
import { useState } from "react";
import CleanStringBuilder from "../../utils/CleanStringBuilder";
import useViewport from "../../hooks/useViewport";

interface AssociationInfoBlockProps extends AssociationItemProps {
    association: SimplifiedAssociationDTO;
}

export interface AssociationItemProps {
    index: number;
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
    { association, index }
) => {
    const iconProperties = iconFactory(association.associationType);
    const [shouldShowExtraInfo, setShouldShowExtraInfo] = useState<boolean>(false);

    const changeExtraInfoVisibility = () => {
        setShouldShowExtraInfo(!shouldShowExtraInfo);
    }

    const { width } = useViewport();

    return (
        <S.Association index={index}>
            {width <= 550
                ?
                <S.IconContainer color={iconProperties.color}>
                    {iconProperties.icon
                        ?
                        <img src={iconProperties.icon} width={'60%'} />
                        :
                        <S.IconSubstitute color={BaseColors.darkBlue}>
                            ?
                        </S.IconSubstitute>
                    }
                </S.IconContainer>
                : <></>
            }

            <S.InfoContainer orientation="row" alignment="center">
                {width > 550
                    ?
                    <S.IconContainer color={iconProperties.color}>
                        {iconProperties.icon
                            ?
                            <img src={iconProperties.icon} width={'60%'} />
                            :
                            <S.IconSubstitute color={BaseColors.darkBlue}>
                                ?
                            </S.IconSubstitute>
                        }
                    </S.IconContainer>
                    : <></>
                }

                <S.ContainerInfosAssociation>
                    <S.AssociationPropertyBlock isBigContainer={true}>
                        <S.Title>Nome:</S.Title>
                        <S.PropertyText>
                            {separateCamelCase(association.name) ?? '-'}
                        </S.PropertyText>
                    </S.AssociationPropertyBlock>

                    <S.AssociationPropertyBlock isBigContainer={width <= 768}>
                        <S.Title>Tipo:</S.Title>
                        <S.PropertyText>
                            {separateCamelCase(association.associationType)}
                        </S.PropertyText>
                    </S.AssociationPropertyBlock>

                    {width > 768
                        ?
                        <S.AssociationPropertyBlock>
                            <S.Title>Fundado em:</S.Title>
                            <S.PropertyText>
                                {association.foundationDate
                                    ? new Date(association.foundationDate).toLocaleDateString('pt-BR')
                                    : '--/--/----'}
                            </S.PropertyText>
                        </S.AssociationPropertyBlock>
                        : <></>}

                    {width > 768
                        ?
                        <S.AssociationPropertyBlock>
                            <S.Title>Membros Ativos:</S.Title>
                            <S.PropertyText>
                                {association.activeMembers ?? '0'}
                            </S.PropertyText>
                        </S.AssociationPropertyBlock>
                        : <></>
                    }

                    {width >= 600
                        ?
                        <S.AssociationPropertyBlock isBigContainer={width <= 768}>
                            <S.Title>Região:</S.Title>
                            <S.PropertyText>
                                {CleanStringBuilder.fromString(`${association.address?.district ?? '?'}, ${association.address?.city ?? '?'}`
                                    .toLowerCase()
                                )
                                    .toInitCap(true)
                                    .build()}
                            </S.PropertyText>
                        </S.AssociationPropertyBlock>
                        : <></>
                    }

                    <S.ButtonContainer>
                        <S.CircularButton
                            onClick={changeExtraInfoVisibility}
                            isExpanded={shouldShowExtraInfo}>

                            <S.Triangle isExpanded={shouldShowExtraInfo} />
                        </S.CircularButton>

                        <S.Tooltip>{shouldShowExtraInfo
                            ? 'Recolher informações extras'
                            : 'Mostrar mais informações'
                        }</S.Tooltip>
                    </S.ButtonContainer>

                </S.ContainerInfosAssociation>
            </S.InfoContainer>

            {shouldShowExtraInfo
                ?
                <S.InfoContainer
                    orientation="column"
                    alignment="start"
                    shouldHaveDivisionBorder={true}
                    shouldAnimate={true}>
                    <S.AssociationLargePropertyBlock>
                        <S.Title>Endereço:</S.Title>
                        <S.RegularText>
                            {
                                CleanStringBuilder.fromString(`${[
                                    `${association.address?.addressSite ?? '?'} ${association.address?.number + ' ' ?? '?'}`,
                                    association.address?.district ?? '?',
                                    association.address?.city ?? '?',
                                ].join(', ').toLowerCase()}, ${association.address?.state ?? '?'}`)
                                    .toInitCap(true)
                                    .build()
                            }
                        </S.RegularText>
                    </S.AssociationLargePropertyBlock>

                    <S.AssociationLargePropertyBlock>
                        <S.Title>Cores:</S.Title>
                        <S.RegularText>
                            {
                                CleanStringBuilder.fromString(association.colors.join(', ').toLowerCase())
                                    .toInitCap(true)
                                    .build()
                            }
                        </S.RegularText>
                    </S.AssociationLargePropertyBlock>

                    <S.AssociationLargePropertyBlock>
                        <S.Title>História breve da associação:</S.Title>
                        <S.RegularText>
                            {
                                CleanStringBuilder.fromString(association.associationHistoryNotes.toLowerCase())
                                    .capitalizeFirstLetter()
                                    .build()
                            }
                        </S.RegularText>
                    </S.AssociationLargePropertyBlock>

                    {width <= 768
                        ?
                        <S.AssociationLargePropertyBlock>
                            <S.Title>Fundado em:</S.Title>
                            <S.RegularText>
                                {association.foundationDate
                                    ? new Date(association.foundationDate).toLocaleDateString('pt-BR')
                                    : '--/--/----'}
                            </S.RegularText>
                        </S.AssociationLargePropertyBlock>
                        : <></>
                    }

                    {width <= 768
                        ?
                        <S.AssociationLargePropertyBlock>
                            <S.Title>Membros Ativos:</S.Title>
                            <S.RegularText>
                                {association.activeMembers ?? '0'}
                            </S.RegularText>
                        </S.AssociationLargePropertyBlock>
                        : <></>
                    }

                    <S.AssociationLargePropertyBlock>
                        <S.Title>Dados fiscais da associação:</S.Title>
                        <S.RegularText>
                            {
                                association.isLegalEntity
                                    ? `É uma pessoa jurídica registrada no CNPJ: ${association.cnpj ?? 'não informado'
                                    } e ${association.canIssueOwnReceipts
                                        ? 'pode'
                                        : 'não pode'
                                    } emitir as próprias notas fiscais.`
                                    : 'Não é uma pessoa jurídica registrada.'
                            }
                        </S.RegularText>
                    </S.AssociationLargePropertyBlock>

                    <S.AssociationLargePropertyBlock>
                        <S.Title>Possui sede própria?</S.Title>
                        <S.RegularText>
                            {
                                association.isSharedWithAResidence
                                    ? 'Não'
                                    : 'Sim'
                            }
                        </S.RegularText>
                    </S.AssociationLargePropertyBlock>
                </S.InfoContainer>
                :
                <></>
            }
        </S.Association>
    );
}

export default AssociationInfoBlock;