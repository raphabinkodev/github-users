import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    margin: 0 auto;
    max-width: 60rem;
    padding: 40px 20px;
`;

export const Title = styled.h1`
  font: 2.6rem 700 Roboto, sans-serif;
  line-height: 56px;
  margin-top: 102px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 60rem;
  display: flex;

  input {
    flex: 1;
    border: 1px solid #222;
    border-radius: 8px 0 0 8px;
    padding-left: 12px;
  }

  button {
    width: 210px;
    height: 50px;
    border: none;
    border-radius: 0 8px 8px 0;
    background-color: #24292e;
    color: #FFF;
    font-weight: 700;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${shade(0.5, '#24292e')}
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #C53030;
  margin-top: 8px;
  font-size: 12px;
`;

export const Users = styled.div`
  max-width: 60rem;
  margin-top: 80px;

  a {
    display: flex;
    width: 100%;
    align-items: center;
    text-decoration: none;
    padding: 20px 10px 10px 20px;
    background-color: #FFF;
    border-radius: 8px;
    transition: transform 0.3s;

    &:hover {
      transform: translateX(10px)
    }

    & + a {
      margin-top: 20px;
    }

    img {
    display: flex;
    align-content: center;
    max-width: 80px;
    border-radius: 50%;
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
  }


`;
