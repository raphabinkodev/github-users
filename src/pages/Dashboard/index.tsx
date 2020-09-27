import React, {
  useState, FormEvent, useEffect,
} from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiTrash2 } from 'react-icons/fi';
import {
  Container, Title, Form, Users, Error,
} from './styles';
import api from '../../services/api';

interface User {
  id: number
  name: string
  avatar_url: string
  bio: string
  repos_url: string
  login: string
}

const Dashboard: React.FC = () => {
  const [newUser, setNewUser] = useState('');
  const [inputError, setInputError] = useState('');
  const [users, setUser] = useState<User[]>(() => {
    const storagedUsers = localStorage.getItem('@GithubUsers:users');

    if (storagedUsers) {
      return JSON.parse(storagedUsers);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@GithubUsers:users', JSON.stringify(users));
  }, [users]);

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

  function handleRemoveUser(id: number) {
    const newUsers = users.filter((user) => user.id !== id);

    setUser(newUsers);
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
            <div key={user.id}>
              <Link to={`/users/${user.login}/repos`}>
                <img src={user.avatar_url} alt={user.avatar_url} />
                <div>
                  <strong>{user.name}</strong>
                  <p>{user.bio}</p>
                </div>
                <FiChevronRight />
              </Link>
              <button type="button" onClick={() => handleRemoveUser(user.id)}>
                <FiTrash2 />
              </button>
            </div>
          ))}
        </Users>
      </Container>

    </>
  );
};

export default Dashboard;
