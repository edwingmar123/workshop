import React, { useState, useEffect } from "react";
import urlProductos from "../constants/Constante";

function Landing() {
  const { collection, loading, error } = urlProductos();
  const [quantity, setQuantity] = useState(0);

  
  const product = collection[0] || {};
  const [selectedImage, setSelectedImage] = useState(product.imagen_1 || "");

  
  useEffect(() => {
    if (product && product.imagen_1) {
      setSelectedImage(product.imagen_1);
    }
  }, [product]);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const addToCart = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (collection.length === 0) return <p>No hay productos disponibles.</p>;

  return (
    <div className="landing-container">
      
      <div className="left-column">
        {[
          product.imagen_1,
          product.imagen_2,
          product.imagen_3,
          product.imagen_4,
        ]
          .filter((src) => src) 
          .map((src, index) => (
            <img
              key={index}
              src={src}
              alt={'Imagen ${index + 1}'}
              className="thumbnail"
              onClick={() => handleImageClick(src)}
            />
          ))}
      </div>

      
      <div className="center-column">
        <img
          src={selectedImage}
          alt="Producto seleccionado"
          className="main-image"
        />
      </div>

      
      <div className="right-column">
        <h2 className="product-title">{product.nombre}</h2>
        <p className="product-description">{product.descripcion}</p>
        <p className="price">$ {product.precio?.toLocaleString()}</p>

        
        <div className="size-options">
          {(Array.isArray(product.tallas) ? product.tallas : []).map((size, index) => (
            <button key={index} className="size-button">
              {size}
            </button>
          ))}
        </div>

        
        <button className="add-to-cart" onClick={addToCart}>
          ADD TO CART
        </button>
        <button className="buy-now">BUY IT NOW</button>

        
        <p className="total-price">
          Total: $ {(quantity * (product.precio || 0)).toLocaleString()}
        </p>
        <div className="cart-info">
          <span>🛒</span>
          <br />
          <br />
          <span> escoage t ropa</span>
          
          
          <span>Cant: {quantity}</span>

          <div className="tipo-Vertical">
        {[
          product.imagen_1,
          product.imagen_2,
          product.imagen_3,
          product.imagen_4,
        ]
          .filter((src) => src) 
          .map((src, index) => (
            <img
              key={index}
              src={src}
              alt={'Imagen ${index + 1}'}
              className="thumbnail"
              onClick={() => handleImageClick(src)}
            />
          ))}
      </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;