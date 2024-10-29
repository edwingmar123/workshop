import React, { useState } from "react";


function Landing() {
  const [selectedImage, setSelectedImage] = useState(
    "imagenes/images (1).jpeg"
  );
  const [quantity, setQuantity] = useState(0);
  const unitPrice = 60000;

  const images = [
    "imagenes/images (1).jpeg",
    "imagenes/images (2).jpeg",
    "imagenes/images (3).jpeg",
    "imagenes/images (4).jpeg",
    "imagenes/images.jpeg",
  ];

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const addToCart = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <div className="landing-container">
      <div className="left-column">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={"Imagen ${index + 1}"}
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
        <h2 className="product-title">Saco Edwing</h2>
        <p className="product-description">Ocean Blue Home - Saco Teddy</p>
        <p className="price">$ {unitPrice.toLocaleString()}</p>

        <div className="size-options">
          {["S", "M", "L", "XL", "XXL"].map((size, index) => (
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
          Total: $ {(quantity * unitPrice).toLocaleString()}
        </p>
        <div className="cart-info">
          <span>🛒</span>
          <span>Cant: {quantity}</span>
        </div>
      </div>
    </div>
  );
}

export default Landing;
