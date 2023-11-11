import { useNavigate } from "react-router-dom"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import { Label } from "../../../components/Input/style"
import Nav from "../../../components/Nav"
import { CardButton, CardContainerInputs, CardContainerLogin, CardContainerLoginTitle, CardForgotPassword, CardForgotPasswordText, Container, Span  } from "./style"
import Footer from "../../../components/Footer"


export const Login = () => {

  const navigate = useNavigate();

    const handleClick = () => {
      navigate('/');
    };  

  return (
      <>
        <Nav/>
         <Container>
          <CardContainerLogin>
          <CardContainerLoginTitle>Login</CardContainerLoginTitle>
          <CardContainerInputs>
          <Label fontSize={'16px'} >Email:</Label>
          <Input type={'text'} width={'80%'} placeholder="Digite o tipo da agremiação" />
          <Label fontSize={'16px'} >Senha:</Label>
          <Input type={'password'} width={'80%'} placeholder="Digite o tipo da agremiação" />
          </CardContainerInputs>
          <CardForgotPassword>
            <CardForgotPasswordText>Esqueceu a senha? <Span>Clique aqui</Span></CardForgotPasswordText>
            <CardForgotPasswordText>Não possui conta? <Span>Cadastre-se</Span></CardForgotPasswordText>
          </CardForgotPassword>
          <CardButton>
          <Button onClick={handleClick} backgroundColor={'#27962D'}>Entrar</Button>
          </CardButton>
          
          </CardContainerLogin>
         </Container>
         <Footer/>
      </>
  )
}
