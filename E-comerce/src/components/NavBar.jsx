import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-green-500 to-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Minha Loja</div>
        <div className="hidden md:flex space-x-4">
          <NavLink
            exact
            to="/"
            activeClassName="text-white"
            className="text-white hover:text-gray-100 transition-colors duration-300"
          >
            Catálogo
          </NavLink>
          <NavLink
            to="/cart"
            activeClassName="text-white"
            className="text-white hover:text-gray-100 transition-colors duration-300"
          >
            Carrinho
          </NavLink>
        </div>
        <div className="md:hidden">
          {/* Ícone do menu pode ser adicionado aqui */}
        </div>
      </div>
    </nav>
  );
}
