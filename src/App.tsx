import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Routes from './routes';


function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Routes/>
    </div>
  );
}

export default App;
