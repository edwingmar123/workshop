import React, { useState, useEffect } from "react";
import urlProductos from "../constants/Constante";

function Landing() {
  const { collection, loading, error } = urlProductos();
  const [quantity, setQuantity] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(collection[0] || {});
  const [selectedImage, setSelectedImage] = useState(
    selectedProduct.imagen_1 || ""
  );

  useEffect(() => {
    if (selectedProduct && selectedProduct.imagen_1) {
      setSelectedImage(selectedProduct.imagen_1);
    }
  }, [selectedProduct]);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setSelectedImage(product.imagen_1);
    setQuantity(0);
  };

  const addToCart = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    console.log(quantity, totalPrice);
  };

  useEffect(() => {
    
  }, [selectedProduct]);
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (collection.length === 0) return <p>No hay productos disponibles.</p>;

  const totalPrice = quantity * (selectedProduct.precio || 0);

  return (
    <div >
      <div className="carro">
      <span className="carrito">🛒</span>
      <span className="cantidad">Cant: {quantity}</span>
      </div>
      <div className="landing-container">
        <div className="left-column">
          {[
            selectedProduct.imagen_1,
            selectedProduct.imagen_2,
            selectedProduct.imagen_3,
            selectedProduct.imagen_4,
          ]
            .filter((src) => src)
            .map((src, index) => (
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
          <h2 className="product-title">{selectedProduct.nombre}</h2>
          <p className="product-description">{selectedProduct.descripcion}</p>
          <p className="price">
            {selectedProduct.precio
              ? `$ ${selectedProduct.precio.toLocaleString()}`
              : "Sin precio"}
          </p>

          <div className="size-options">
            {(Array.isArray(selectedProduct.tallas)
              ? selectedProduct.tallas
              : []
            ).map((size, index) => (
              <button key={index} className="size-button">
                {size}
              </button>
            ))}
          </div>

          <button className="add-to-cart" onClick={addToCart}>
            ADD TO CART
          </button>
          <button className="buy-now">BUY IT NOW</button>

          <p className="total-price">Total: $ {totalPrice.toLocaleString()}</p>
          <div className="cart-info">
            <div className="tipo-Vertical">
              {collection.map((item, index) => (
                <img
                  key={index}
                  src={item.imagen_1}
                  alt={"Imagen del producto ${index + 1}"}
                  className="thumbnail"
                  onClick={() => handleProductClick(item)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
