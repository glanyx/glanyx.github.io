import React from 'react';
import './App.css';
import Routes from './Routes'

import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './theme'

import { Nav } from './components'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Nav />
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
