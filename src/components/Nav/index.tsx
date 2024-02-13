import { Item, List, Logo, NavBar, NavImage, Options, RegisterButton, User } from './style'
import PageSymbol from "../../assets/logo-paco.png"
import { useNavigate } from 'react-router-dom';



/**
 * Falta documentação
 * @returns 
 */
const Nav = () => {

    const navigate = useNavigate();

    const handleClickPageHome = () => {
        navigate('/');
    };

    const handleClickPageForm = () => {
        navigate('/register-association/form');
    };

    return (
        <NavBar>
            <NavImage>
                <Logo src={PageSymbol} />
            </NavImage>
            <Options>
                <List>
                    {/* Os itens da navbar precisam sem importados do button, com o padrão large */}
                    <Item onClick={handleClickPageHome}>Home</Item>
                    <Item onClick={handleClickPageForm}>Cadastrar agremiação</Item>
                    <Item>Dashboard</Item>
                </List>
            </Options>
            {/* Também deve seguir o padrão de botão */}
            <RegisterButton>
                {/* Não usar tamanho fixo no botão nem margin, o botão deve conter apenas padding */}
                <User />

            </RegisterButton>
        </NavBar>
    )
}

export default Nav