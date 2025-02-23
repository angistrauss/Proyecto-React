import React from 'react';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <header style={{ width: '100%', display: 'block' }}>
        <Navbar />
      </header>
      <main style={{ width: '100vw', padding: '20px', textAlign: 'center', flex: 1 }}>
        <ItemListContainer greeting="¡Bienvenidos a mi página web!" />
      </main>
    </>
  );
}

export default App;
