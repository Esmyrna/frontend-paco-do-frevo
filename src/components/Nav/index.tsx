import { Item, List, Logo, NavBar, NavImage, Options, RegisterButton } from './style'
import PageSymbol from "../../assets/logo-paco.png"



/**
 * Falta documentação
 * @returns 
 */
const Nav = () => {
    return (
        <NavBar>
            <NavImage>
                <Logo src={PageSymbol} />
            </NavImage>
            <Options>
                <List>
                    {/* Os itens da navbar precisam sem importados do button, com o padrão large */}
                    <Item>Home</Item>
                    <Item>Cadastrar agremiação</Item>
                    <Item>Dashboard</Item>
                </List>
            </Options>
            {/* Também deve seguir o padrão de botão */}
             <RegisterButton>
                {/* Não usar tamanho fixo no botão nem margin, o botão deve conter apenas padding */}
           
           
             </RegisterButton>
        </NavBar>
    )
}

export default Nav