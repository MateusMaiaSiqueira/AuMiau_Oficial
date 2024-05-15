import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pagina-inicial/Home'; 
import Cachorros from './paginas-adocao/Cachorros'; 
import Gatos from './paginas-adocao/Gatos';
import Adotar from './paginas-adocao/Adotar'; 
import Logo from './pagina-inicial/logo';
import Footer from './pagina-inicial/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Logo />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/cachorros" element={<Cachorros />} /> 
          <Route path="/gatos" element={<Gatos />} /> 
          <Route path="/adotar/:id" element={<Adotar />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;






