import React from 'react';
import { StyledButton } from './styles';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
};

const Button: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <StyledButton type="button" {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
