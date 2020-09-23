import React from 'react';
import githubIcon from '../../assets/mark-github-16.svg';
import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <img src={githubIcon} alt="" />
  </Container>
);

export default Header;
