import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cachorros = () => {
  const [cachorros, setCachorros] = useState([]);

  useEffect(() => {
    // Chama a função para adicionar cachorros de exemplo
    adicionarCachorrosExemplo();
  }, []);

  const adicionarCachorrosExemplo = () => {
    // Aqui podemos adicionar alguns cachorros diretamente como exemplo
    const cachorrosExemplo = [
      {
        id: 1,
        nome: 'Rex',
        descricao: 'Um cachorro muito amigável e brincalhão.',
        foto: 'https://via.placeholder.com/150',
      },
      {
        id: 2,
        nome: 'Bolt',
        descricao: 'Um cachorro rápido e corajoso.',
        foto: 'https://via.placeholder.com/150',
      },
      {
        id: 3,
        nome: 'Luna',
        descricao: 'Uma cachorra adorável que adora brincar de buscar.',
        foto: 'https://via.placeholder.com/150',
      },
      {
        id: 4,
        nome: 'Max',
        descricao: 'Um cachorro calmo e adora longas caminhadas.',
        foto: 'https://via.placeholder.com/150',
      },
      {
        id: 5,
        nome: 'Buddy',
        descricao: 'Um cachorro leal e protetor.',
        foto: 'https://via.placeholder.com/150',
      },
      {
        id: 6,
        nome: 'Daisy',
        descricao: 'Uma cachorra amorosa e cheia de energia.',
        foto: 'https://via.placeholder.com/150',
      }
    ];

    // Define os cachorros de exemplo no estado
    setCachorros(cachorrosExemplo);
  };

  return (
    <div className="container mx-auto">
      <h2 className="mt-8 mb-8 flex justify-center items-center text-3xl font-bold my-4">Cachorros</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cachorros.map(cachorro => (
          <div key={cachorro.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img src={cachorro.foto} alt={cachorro.nome} className="h-48 w-48 mb-2" />
            <h3 className="text-lg font-semibold mb-2">{cachorro.nome}</h3>
            <p className="text-sm text-gray-600 mb-4">{cachorro.descricao}</p>
            <Link to={`/adotar/${cachorro.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Adotar</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cachorros;





