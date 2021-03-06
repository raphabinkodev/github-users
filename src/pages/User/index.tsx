import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';
import {
  Container, UserInfo, Repositories, Error,
} from './style';
import githubLogo from '../../assets/GitHub_Logo.png';
import errorImage from '../../assets/404-error.svg';
import api from '../../services/api';

interface RepositoriesParams {
  login: string;
}

interface User {
  login: string
  avatar_url: string
  bio: string
  public_repos: number
  followers: number
  following: number
}

interface Repo {
  id: number
  name: string
  description: string
  html_url: string
}

const UsersRepos: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [repositories, setRepositories] = useState<Repo[]>([]);
  const [error, setError] = useState('');

  const { login } = useParams<RepositoriesParams>();

  useEffect(() => {
    api.get(`/users/${login}`).then(response => {
      setUser(response.data);
    }).catch(() => {
      setError('Este usuário não é valido.');
    });
    api.get(`/users/${login}/repos`).then(response => {
      setRepositories(response.data);
    }).catch(() => {
      setError('Este usuário não é valido.');
    });
  }, [login]);
  return (
    <>
      <Container>
        <div>
          <img src={githubLogo} alt="GitHub" />
          <Link to="/">
            <FiChevronsLeft size={32} />
            Voltar
          </Link>
        </div>
      </Container>
      {error && <Error>{error} <img src={errorImage} alt="" /></Error>}
      {user && (
        <UserInfo>
          <header>
            <img src={user.avatar_url} alt="" />
            <div>
              <strong>{user.login}</strong>
              <p>{user.bio}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{user.public_repos}</strong>
              <span>Repositórios</span>
            </li>
            <li>
              <strong>{user.followers}</strong>
              <span>Followers</span>
            </li>
            <li>
              <strong>{user.following}</strong>
              <span>Following</span>
            </li>
          </ul>
        </UserInfo>
      )}

      <Repositories>
        {repositories.map(repository => (
          <a key={repository.id} href={repository.html_url} target="_blank" rel="noopener noreferrer">
            <div>
              <strong>{repository.name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default UsersRepos;
