import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.colors.lightBlue};
  color: ${(props) => props.theme.colors.dark};
  padding: 5px 10px;
  height: 40px;
`;
