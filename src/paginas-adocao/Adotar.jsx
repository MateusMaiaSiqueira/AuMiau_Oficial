import React from 'react';
import { useParams } from 'react-router-dom';

const Adotar = () => {

  const { id } = useParams();



  const animal = {
    id: id,
    nome: 'Rex', 
    foto: 'https://via.placeholder.com/500', 
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center items-center">
        <img src={animal.foto} alt={animal.nome} className="h-96 w-96 rounded-full m-36" />
        <div className='m-36'>
          <h2 className="text-3xl font-bold mb-4">Formulário de Adoção</h2>
          <form>
            <div className="flex mb-4">
              <div className="w-1/2 pr-2">
                <label className="block text-gray-700 font-bold" htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="w-1/2 pl-2">
                <label className="block text-gray-700 font-bold" htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 pr-2">
                <label className="block text-gray-700 font-bold" htmlFor="telefone">Telefone:</label>
                <input type="text" id="telefone" name="telefone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="w-1/2 pl-2">
                <label className="block text-gray-700 font-bold" htmlFor="bairro">Bairro:</label>
                <input type="text" id="bairro" name="bairro" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 pr-2">
                <label className="block text-gray-700 font-bold" htmlFor="cidade">Cidade:</label>
                <input type="text" id="cidade" name="cidade" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="w-1/2 pl-2">
                <label className="block text-gray-700 font-bold" htmlFor="rua">Rua:</label>
                <input type="text" id="rua" name="rua" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 pr-2">
                <label className="block text-gray-700 font-bold" htmlFor="tipoResidencia">Tipo de Residência:</label>
                <input type="text" id="tipoResidencia" name="tipoResidencia" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="w-1/2 pl-2">
                <label className="block text-gray-700 font-bold" htmlFor="idade">Idade:</label>
                <input type="text" id="idade" name="idade" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 pr-2">
                <label className="block text-gray-700 font-bold" htmlFor="numeroResidencia">Número da Residência:</label>
                <input type="text" id="numeroResidencia" name="numeroResidencia" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="w-1/2 pl-2">
                <label className="block text-gray-700 font-bold" htmlFor="pontoReferencia">Ponto de Referência:</label>
                <input type="text" id="pontoReferencia" name="pontoReferencia" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Adotar;
