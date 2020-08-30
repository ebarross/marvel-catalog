import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${(props) => props.theme.colors.darkBlue};
  border: 2px solid ${(props) => props.theme.colors.darkBlue};
  border-radius: 5px;
  color: #fff;
  transition: all 0.4s ease;
  font-weight: bold;
  letter-spacing: 1px;

  &:hover {
    background-color: #0a3450;
    border-color: #0a3450;
  }
`;
