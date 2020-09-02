import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

type ButtonProps = {
  disabled?: boolean;
};

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.theme.colors.darkBlue};
  border: 1px solid ${(props) => props.theme.colors.darkBlue};
  font-size: 16px;
  line-height: 1;
  padding: 0px 15px;
  /* margin: 0px 5px; */
  border-radius: 3px;
  transition: all 0.3s ease;
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.disabled ? '#888' : '#fff')};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};

  @media (min-width: 768px) {
    font-size: 16px;
  }

  :hover {
    ${(props) =>
      !props.disabled && {
        'background-color': '#0a3450',
        'border-color': '#0a3450',
      }}
  }

  svg {
    font-size: 20px;
    margin-top: 2px;
  }
`;

export const ActionButton = styled(Button)<PageProps>``;

export const Pages = styled.div`
  order: -1;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    order: 0;
  }
`;

export const Previous = styled.div`
  width: 50%;
  padding-right: 5px;

  @media (min-width: 768px) {
    width: auto;
    padding-right: 10px;
  }
`;

export const Next = styled.div`
  width: 50%;
  padding-left: 5px;

  @media (min-width: 768px) {
    width: auto;
    padding-left: 10px;
  }
`;

type PageProps = {
  active?: boolean;
};

export const Page = styled(Button)<PageProps>`
  padding: 0px;
  min-width: 30px;
  padding-left: 5px;
  padding-right: 5px;
  width: auto;
  display: unset;
  /* font-size: 16px; */

  :not(:first-child) {
    margin-left: 8px;
  }

  ${(props) =>
    props.active && {
      'background-color': props.theme.colors.lightBlue,
      'border-color': props.theme.colors.lightBlue,
    }};
`;
