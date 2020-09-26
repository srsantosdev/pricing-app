import styled, { css } from 'styled-components';

interface PriceProps {
  spotlight?: boolean;
}

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    margin-bottom: 40px;

    h1 {
      font-size: 24px;
      color: #1a1c20;
    }

    > div {
      margin-top: 64px;
      display: flex;
      align-items: center;

      > div {
        margin: 0 16px;
      }
    }
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > div + div {
    margin-left: 16px;
  }
`;

export const Card = styled.div`
  width: 230px;
  height: 330px;
  background: #fff;
  padding: 24px;

  box-shadow: 1px 4px 5px 1px rgba(170, 106, 216, 0.25);
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  > div.content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;

    button {
      border: 0;
      height: 40px;

      background: #5b15b9;
      border-radius: 5px;

      font-size: 14px;
      text-transform: uppercase;
      color: #fff6ff;
    }
  }

  ul {
    list-style: none;

    > li {
      display: flex;
      align-items: center;

      img {
        margin-right: 8px;
      }

      span {
        font-family: Roboto;
        font-weight: normal;
        font-size: 12px;

        color: #53565e;
      }

      & + li {
        margin-top: 8px;
      }
    }
  }

  h3 {
    font-weight: 600;
    color: #1a1c20;
    text-align: center;
  }
`;

export const SpotLight = styled.div`
  width: 320px;
  height: 400px;

  padding: 24px;

  background: linear-gradient(156.88deg, #630eac 9.3%, #541cc7 99.35%);
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  > div.content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;

    button {
      border: 0;
      height: 40px;

      font-weight: bold;
      font-size: 14px;
      text-transform: uppercase;

      color: #5b15b9;

      background: #ffffff;
      border-radius: 5px;
    }
  }

  ul {
    list-style: none;

    > li {
      display: flex;
      align-items: center;

      img {
        margin-right: 8px;
      }

      span {
        font-family: Roboto;
        font-weight: normal;
        font-size: 14px;

        color: #ffffff;
      }

      & + li {
        margin-top: 8px;
      }
    }
  }

  h3 {
    font-weight: bold;
    font-size: 18px;
    color: #fff6ff;
    text-align: center;
  }
`;

export const Price = styled.div<PriceProps>`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  margin-top: 16px;

  color: ${props => (props.spotlight ? '#fff' : '#1A1C20')};

  span {
    font-size: 12px;
    margin-top: 5px;
    margin-right: 4px;
  }

  strong {
    font-weight: bold;
    font-size: 28px;
  }

  ${props =>
    props.spotlight &&
    css`
      span {
        font-size: 16px;
        margin-top: 7px;
        margin-right: 4px;
      }

      strong {
        font-weight: bold;
        font-size: 48px;
      }
    `}
`;

export const Separator = styled.div`
  width: 100%;
  height: 0.5px;

  background: #c4c4c4;

  margin: 24px 0;
`;
