import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  padding: 0px 10px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 25%;
  }

  @media (min-width: 992px) {
    width: 20%;
  }
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const Image = styled.div`
  height: 280px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 6px 1px rgb(82 82 82 / 5%), 0 5px 10px 1px rgb(0 0 0 / 24%);

  @media (min-width: 576px) {
    height: 400px;
  }

  @media (min-width: 520px) {
    height: 330px;
  }

  @media (min-width: 768px) {
    height: 260px;
  }

  @media (min-width: 992px) {
    height: 320px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.4s ease;

    ${Card}:hover & {
      transform: scale(1.1);
    }
  }
`;

export const Details = styled.div`
  padding-top: 15px;
`;

export const Title = styled.h4`
  color: ${(props) => props.theme.colors.lightBlue};
  font-weight: 700;
  margin-bottom: 10px;
  transition: all 0.4s ease;

  ${Card}:hover & {
    color: ${(props) => props.theme.colors.darkBlue};
  }
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.orange};
  font-size: 13px;
  font-weight: 600;
`;
