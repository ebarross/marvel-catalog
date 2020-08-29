import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.dark};
  width: 100%;
  z-index: 100;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 10px 15px;

  @media (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const Links = styled.div`
  display: flex;
  margin-left: 100px;
`;

export const Link = styled(RouterLink)`
  font-weight: bold;
  text-decoration: none;
  transition: 0.4s ease;

  &,
  &:active {
    color: ${(props) => props.theme.colors.lightBlue};
  }

  &:hover {
    opacity: 0.8;
  }
`;
