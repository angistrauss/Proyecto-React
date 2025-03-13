import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Computacion from "./pages/Computacion";
import Accesorios from './pages/Accesorios';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/detail/:id" element={<ItemDetailContainer />} />
        <Route path="/category/computación" element={<Computacion />} />
        <Route path="/category/accesorios" element={<Accesorios />} />
        <Route path="/cart" element={<div>Mi carrito</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
