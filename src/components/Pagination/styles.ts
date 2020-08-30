import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.darkBlue};
  border: 1px solid ${(props) => props.theme.colors.darkBlue};
  font-size: 14px;
  padding: 0px 15px;
  margin: 0px 5px;
  border-radius: 3px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  :hover {
    background-color: #0a3450;
    border-color: #0a3450;
  }

  svg {
    font-size: 18px;
  }
`;

export const Pages = styled.div``;

type PageProps = {
  active: boolean;
};

export const Page = styled(Button) <PageProps>`
  padding: 0px;
  min-width: 30px;
  padding-left: 5px;
  padding-right: 5px;
  height: 30px;
  display: unset;

  ${(props) =>
    props.active && {
      'background-color': props.theme.colors.lightBlue,
      'border-color': props.theme.colors.lightBlue,
    }};
`;
