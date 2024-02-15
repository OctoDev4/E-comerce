import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Thanks from './pages/Thanks';
import { CartProvider } from './contexts/CartContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <CartProvider>
        <RootLayout />
      </CartProvider>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'thanks',
        element: <Thanks />,
      },
    ],
  },
]);

export default router;
