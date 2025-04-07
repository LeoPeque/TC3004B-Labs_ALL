import React from 'react';
import CountryList from './components/CountryList.jsx'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Administrador de Países</h1>
      </header>
      <main>
        <CountryList />
      </main>
      <footer>
        <p>CRUD de Países © 2025</p>
      </footer>
    </div>
  );
}

export default App;
