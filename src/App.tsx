import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import GlobalStyles from './styles/global';
import { theme } from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
