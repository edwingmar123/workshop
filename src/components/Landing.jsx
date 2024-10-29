import React, { useState } from 'react';
import './App.css'; 

function Principal() {
  const [selectedImage, setSelectedImage] = useState("imagenes/images (1).jpeg");
  const [quantity, setQuantity] = useState(0);
  const unitPrice = 60000;

  const images = [
    "imagenes/images (1).jpeg",
    "imagenes/images (2).jpeg",
    "imagenes/images (3).jpeg",
    "imagenes/images (4).jpeg",
    "imagenes/images.jpeg"
  ];

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const addToCart = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  return (
    <div className="container">
      <div id="numero" className="cantidad">
        Cant {quantity}
      </div>
      <div className="carrito">🛒</div>

      <div className="product-info">
        <label className="ropa">Saco Edwing</label>
        <label className="saco">Ocean Blue Home - Saco Teddy</label>

        <div className="imagenes" id="ventas">
          {images.map((src, index) => (
            <div key={index} className="containerImg">
              <img
                className="img"
                src={src}
                alt={`Imagen ${index + 1}`}
                onClick={() => handleImageClick(src)}
              />
            </div>
          ))}
        </div>

        <div className="muestra" id="muestra">
          <img className="pintur" src={selectedImage} alt="Imagen seleccionada" />
        </div>

        <div className="contenedortallas">
          {["S", "M", "L", "XL", "XXL"].map((size, index) => (
            <div key={index} className="tallas">{size}</div>
          ))}
        </div>

        <button className="btn" onClick={addToCart}>ADD TO BANG</button>
      </div>

      <label className="precio">$60.000</label>
      <div id="varios" className="acomulado">
        Precio total a pagar: {quantity * unitPrice}
      </div>
    </div>
  );
}

export default Principal;
