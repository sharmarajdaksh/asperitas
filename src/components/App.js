import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import MainView from './MainView';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'IBM Plex Sans', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
  }
`;

const App = props => (
  <>
    <GlobalStyle />
    <Header />
    <Switch>
      <Route path='/' component={MainView} />
    </Switch>
  </>
);

export default App;
