import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  background-color: ${(props) => props.theme.colors.orange};
  min-height: calc(100vh - 60px);
  padding: 15px;
`;
