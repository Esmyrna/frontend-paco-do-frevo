import { StyledButton } from "./style";

type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
  };
  
  const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
      <StyledButton  onClick={onClick}>
        {children}
      </StyledButton>
    );
  };
  
  export default Button;