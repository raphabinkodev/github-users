import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 60rem;
  padding: 40px 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 100px;

    img {
      width: 120px;
    }

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #a8a8a3;
      transition: color .2s;
      &:hover {
        color: #666;
      }
    }
  }
`;

export const UserInfo = styled.section`
  max-width: 56rem;
  margin: 0 auto;
  padding: 30px 20px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 140px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;
      display: block;

      strong{
        font-size: 32px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 8px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {

      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 32px;
        color: #3d3d4d;
      }
      span {
        display: block;
        font-size: 18px;
        color: #737380;
      }
    }
  }
`;

export const Repositories = styled.div`
  max-width: 56rem;
  margin: 0 auto;
  padding: 60px 20px;

  a {
    display: flex;
    width: 100%;
    min-height: 100px;
    align-items: center;
    text-decoration: none;
    padding: 20px 10px 10px 20px;
    background-color: #FFF;
    border-radius: 8px;
    transition: transform 0.3s;
    z-index: 1;


    &:hover {
      transform: translateX(10px)
    }

    & + a {
      margin-top: 20px;
    }

    div {
      flex: 1;
      margin: 0 20px;

      strong {
        font-size: 1.6rem;
        font-weight: 700;
        font-family: Archivo;
        color: #3d3d3d;
      }

      p {
        margin-top: 6px;
        color: #a8a8a8;
        font-size: 1.1rem;
      }
    }
    svg {
        margin-left: auto;
        color: #cbcbd6;
      }
  }
`;
