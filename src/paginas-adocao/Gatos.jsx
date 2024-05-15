import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Gatos = () => {
  const [gatos, setGatos] = useState([]);

  useEffect(() => {

    adicionarGatosExemplo();
  }, []);

  const adicionarGatosExemplo = () => {

    const gatosExemplo = [
      {
        id: 1,
        nome: 'Whiskers',
        descricao: 'Um gato adorável que adora brincar com bolas de lã.',
        foto: 'https://via.placeholder.com/150',
      },
      {
        id: 2,
        nome: 'Miau',
        descricao: 'Um gato preguiçoso que gosta de dormir o dia todo.',
        foto: 'https://via.placeholder.com/150',
      },
      {
        id: 3,
        nome: 'Frajola',
        descricao: 'Um gato esperto e malandro.',
        foto: 'https://via.placeholder.com/150',
      },
      {
        id: 4,
        nome: 'Luna',
        descricao: 'Uma gata charmosa e cheia de personalidade.',
        foto: 'https://via.placeholder.com/150',
      },
      {
        id: 5,
        nome: 'Bella',
        descricao: 'Uma gata elegante e curiosa.',
        foto: 'https://via.placeholder.com/150',
      },
      {
        id: 6,
        nome: 'Garfield',
        descricao: 'Um gato comilão que adora lasanha.',
        foto: 'https://via.placeholder.com/150',
      }
    ];

    // Define os gatos de exemplo no estado
    setGatos(gatosExemplo);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold my-4">Gatos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {gatos.map(gato => (
          <div key={gato.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img src={gato.foto} alt={gato.nome} className="h-48 w-48 mb-2" />
            <h3 className="text-lg font-semibold mb-2">{gato.nome}</h3>
            <p className="text-sm text-gray-600 mb-4">{gato.descricao}</p>
            <Link to={`/adotar/${gato.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Adotar</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gatos;



