import { useEffect } from 'react'
import './App.css'
import {Card} from '/components/Card'
import RegisterForm from '/components/RegisterForm';
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch('http://localhost:3000/products');
    const data = await response.json();
    setProducts(data.products);
  };

  return (
    <>
    <div>
      {/* ==== HEADER ==== */}
      <header className="header">
        <div className="header-container">
          <h1 className="logo">MiTienda</h1>

          <div className="search-bar">
            <input type="text" placeholder="Buscar productos..." />
            <button>🔍</button>
          </div>

          <div className="cart-icon">
            🛒 <span className="cart-count">3</span>
          </div>
        </div>
      </header>

      <RegisterForm />

      {/* ==== CONTENIDO ==== */}
      <main className="main-content">
        <h1 className="products-title">Productos</h1>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h2 className="product-name">{product.name}</h2>
              <p className="product-category">{product.category}</p>
              <p className="product-price">${product.price}</p>
              <button className="product-button">Agregar al carrito</button>
            </div>
          ))}
        </div>
      </main>
    </div>

    </>
  )
}

export default App