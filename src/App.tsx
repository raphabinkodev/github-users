import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Header />
      <Dashboard />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
