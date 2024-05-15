import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className='text-white'>
          <p>Endereço: Endereço do abrigo</p>
          <p>Telefone: (XX) XXXX-XXXX</p>
        </div>
        <p className='text-white'>Horário de Atendimento: Seg-Sex 9:00 - 17:00</p>
      </div>
    </footer>
  );
}

export default Footer;

