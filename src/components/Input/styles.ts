import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.colors.lightBlue};
  padding: 5px 10px;
  height: 40px;
`;
