import React from 'react';
import { StyledButton } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

const Button: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <StyledButton {...rest} type="button">
      {children}
    </StyledButton>
  );
};

export default Button;
