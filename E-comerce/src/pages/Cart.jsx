import React from 'react';
import { useCart } from '../contexts/CartContext';

export default function Cart() {
  const { cartItems } = useCart();

  return (
    <div className="w-full max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">Carrinho</h1>
      {!cartItems || cartItems.length === 0 ? (
        <p className="text-gray-700">Não há itens no carrinho</p>
      ) : (
        <div className="grid gap-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center border rounded-lg overflow-hidden">
              <img src={item.image} alt={item.title} className="w-32 h-32 object-cover" />
              <div className="flex-1 p-4">
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="text-gray-500">Quantidade: {item.quantity}</p>
                <p className="text-gray-500">Preço Total: U$ {item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
