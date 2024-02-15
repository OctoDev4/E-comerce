// Product.js
import React, { useState } from 'react';

export default function Product({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  return (
    <div className="border rounded-md p-4 shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-64 mb-4" />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-600 mb-2"> U${product.price}</p>
      <div className="flex items-center">
        <select value={quantity} onChange={handleQuantityChange} className="mr-4 border px-2 py-1">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          {/* Adicione quantas opções quiser */}
        </select>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => addToCart(product, quantity)}>Adicionar ao Carrinho</button>
      </div>
    </div>
  );
}
