import React from 'react';
import Routes from "./routes";
import '../src/assets/scss/styles.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { ContextProvider } from './context/ContextApi';

function App() {
  return (
    <ContextProvider>
      <Routes></Routes>
    </ContextProvider>  
  );
}

export default App;
