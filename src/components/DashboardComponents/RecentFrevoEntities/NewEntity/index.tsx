import { NameEntity, NewEntityWrapper, TypeEntity } from "./styles"
import { NewEntityProps } from "./types"

export const NewEntity: React.FC<NewEntityProps> = ({ name, type }) => {
    return (
        <NewEntityWrapper>
            <NameEntity>{name}</NameEntity>
            <TypeEntity>{type}</TypeEntity>
        </NewEntityWrapper>
    )
}
