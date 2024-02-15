import React from 'react';
import { useCart } from '../contexts/CartContext';
import productsData from '../data/products_mock.json';
import Product from '../components/Product';

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <h1 className="text-center my-8">Catálogo de Produtos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productsData.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
