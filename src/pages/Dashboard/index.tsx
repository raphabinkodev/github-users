import React, { useState } from 'react';
import { Title, Container } from './styles';

const Dashboard: React.FC = () => {
  const [newUser, setNewUser] = useState('');

  return (
    <>
      <Container>
        <Title>
          Explore usuários e
          <br />
          seus repositórios no Github
        </Title>
      </Container>
    </>
  );
};

export default Dashboard;
