import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${(props) => props.theme.colors.darkBlue};
  border: 2px solid ${(props) => props.theme.colors.darkBlue};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.orange};
  transition: all 0.4s ease;
  font-weight: bold;
  letter-spacing: 1px;

  &:hover {
    background-color: transparent;
    background-color: #0c3b5a;
    border-color: #0c3b5a;
  }
`;
