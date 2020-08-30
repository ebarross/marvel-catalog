import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 30px;
  }
`;

export const InputControl = styled.div`
  width: 100%;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    width: 80%;
    margin-bottom: 0px;
    margin-right: 20px;
  }
`;

export const ButtonControl = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 20%;
  }
`;
