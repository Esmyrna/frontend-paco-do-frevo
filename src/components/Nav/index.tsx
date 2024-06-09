import { Item, List, Logo, NavBar, NavImage, Options } from './style'
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
        navigate('/multistep');
    };

    return (
        <NavBar>
            <NavImage>
                <Logo src={PageSymbol} />
            </NavImage>
            <Options>
                <List>
                    <Item onClick={handleClickPageHome}>Home</Item>
                    <Item onClick={handleClickPageForm}>Cadastrar agremiação</Item>
                    <Item onClick={() =>navigate('/dashboard')}>Dashboard</Item>
                </List>
            </Options>

        </NavBar>
    )
}

export default Nav