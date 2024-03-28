import { StyledButton } from "./style";

type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
    backgroundColor: string;
  };

  const Button: React.FC<ButtonProps> = (
    {
      children,
      onClick,
      backgroundColor,
    }) => {
    return (
      <StyledButton
      backgroundColor={backgroundColor}
      onClick={onClick}>
        {children}
      </StyledButton>
    );
  };

  export default Button;