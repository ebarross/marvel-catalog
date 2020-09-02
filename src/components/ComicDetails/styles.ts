import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 32%;
    margin-right: 40px;
    margin-bottom: 0px;
  }

  @media (min-width: 1200px) {
    margin-right: 70px;
  }
`;

export const Image = styled.div`
  width: 100%;
  box-shadow: 0 4px 6px 1px rgb(82 82 82 / 5%), 0 5px 10px 1px rgb(0 0 0 / 24%);

  img {
    width: 100%;
    border-radius: 5px;
  }
`;

export const Details = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    flex: 1;
  }

  @media (min-width: 992px) {
    padding-right: 60px;
  }

  @media (min-width: 1200px) {
    padding-right: 150px;
  }
`;

export const Title = styled.div`
  p {
    color: ${(props) => props.theme.colors.lightBlue};
    font-size: 28px;
    font-weight: 600;
  }
`;

export const Description = styled.div`
  width: 100%;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .section-title {
    color: ${(props) => props.theme.colors.orange};
    font-size: 20px;
  }
`;

export const SaleDate = styled.div``;

export const Creators = styled.div`
  margin-bottom: 30px;

  @media (min-width: 768px) {
    margin-bottom: 0px;
  }

  ul {
    list-style: none;
  }

  li {
    font-size: 15px;
  }
`;
