import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.colors.darkBlue};
  background-color: ${(props) => props.theme.colors.darkBlue};
  color: #fff;
  font-weight: 600;
  padding: 5px 15px;
  height: 40px;
  transition: all 0.2s ease;

  :focus {
    border-color: ${(props) => props.theme.colors.lightBlue};
  }

  ::placeholder {
    color: #a5a5a5;
  }
`;
