import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  padding: 0px 10px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 20%;
  }
`;

export const Card = styled.div`
  /* width: 130px; */
  /* height: 170px; */
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Image = styled.div`
  /* width: 38%; */

  img {
    width: 100%;
    /* height: 100%; */
    /* object-fit: cover; */
  }
`;

export const Details = styled.div`
  /* width: 62%; */
  padding: 10px;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.darkBlue};
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.lightBlue};
  font-size: 12px;
`;
