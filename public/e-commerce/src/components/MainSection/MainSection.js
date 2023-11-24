
import React, { useState, useEffect } from 'react';
import './MainSection.css';
import btnAdd from '../../img/bt_add_to_cart.svg';
import iconClose from '../../img/icon_close.png'
import { MagicMotion } from 'react-magic-motion';


const MainSection = ({onReset,onIncrement,onDecrement,cartOpen}) => {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState('Tu carrito está vacío');
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:3000/productos')
      .then(response => response.json())
      .then(data => {
       
        setProductos(data);
      })
      .catch(error => console.error('Error:', error));
  }, []); 

  

  

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setMessage('');
    onIncrement();
    
   
  };

  const clearCart = () => {
    setCartItems([]);
    setMessage('Tu carrito está vacío');
    onReset();
    
    
  };
  return (
    
    <main>
      <section id="side-productos">
        <h2>Titulo</h2>
        <div className="list-product">
          {productos.map((product) => (
            
              
              <div key={product.id} className="box-product" >
              
              <img src={product.img} alt={product.name} className='imgProduct'/>
              <div className="product-info">
                <div className="container-product-info">
                  <h3>{`${product.name} ${product.model}`}</h3>
                  <p>${product.price}</p>
                </div>
                <button
                  className="add-to-cart-button"
                  onClick={() => addToCart(product)}
                >
                  <img src={btnAdd} alt="Add to Cart" />
                </button>
              </div>
            </div>
            
            
          ))}
        </div>
      </section>
      <MagicMotion>
      
      
      <aside id="side-carrito" className={cartOpen ? '' : 'inactive'}>
        <h2>Carrito</h2>
        <p className={`p-msj ${message ? 'active' : ''}`}>{message}</p>
        <ul className="my-carrito-container">
          {cartItems.map((item, index) => (
            <li key={index} className={`item-list-${index} item`}>
              <div className="product-info carrito-info">
                <div className="container-carrito-info">
                  <h3>{`${item.name} ${item.model}`}</h3>
                  <p>${item.price}</p>
                </div>
                <button
                  className={`delete-product-carrito${index}`}
                  onClick={() => {
                    setCartItems(cartItems.filter((_, i) => i !== index));
                    onDecrement();
                    if (cartItems.length === 1){setMessage('Tu carrito está vacío'); onReset();} 
                  }}
                >
                  <img src={iconClose} alt="Eliminar producto" className="logo-delete-item" />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button className="delete-all-carrito" onClick={clearCart}>
          Vaciar Carrito
        </button>
      </aside>
      </MagicMotion>
    </main>
  );
};

export default MainSection;