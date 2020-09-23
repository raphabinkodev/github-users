import React, { useState, FormEvent } from 'react';
import {
  Container, Title, Form, Users, Error,
} from './styles';
import api from '../../services/api';

interface User {
  name: string
  avatar_url: string
  bio: string
  repos_url: string
}

const Dashboard: React.FC = () => {
  const [newUser, setNewUser] = useState('');
  const [inputError, setInputError] = useState('');
  const [users, setUser] = useState<User[]>([]);

  async function handleAddUser(
    event: FormEvent<HTMLFormElement>,
  ):Promise<void> {
    event.preventDefault();
    if (!newUser) {
      setInputError('Digite um nome de usuário válido!');
      return;
    }
    try {
      const response = await api.get(`/users/${newUser}`);

      const user = response.data;

      setUser([...users, user]);
      setNewUser('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por este usuário!');
    }
  }

  return (
    <>
      <Container>
        <Title>
          Explore usuários e
          <br />
          seus repositórios no Github
        </Title>
        <Form onSubmit={handleAddUser}>
          <input
            value={newUser}
            onChange={e => setNewUser(e.target.value)}
            placeholder="Digite o nome do usuário. Ex:(raphabinkodev)"
          />
          <button type="submit">Procurar</button>
        </Form>
        { inputError && <Error>{inputError}</Error>}
        <Users>
          {users.map(user => (
            <a key={user.name} href={user.repos_url}>
              <img src={user.avatar_url} alt={user.avatar_url} />
              <div>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
              </div>
            </a>
          ))}
        </Users>
      </Container>

    </>
  );
};

export default Dashboard;
