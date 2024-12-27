import React, { useState, useEffect } from "react";
import { db } from "../data/db";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Footers from "../components/Footers";

function Home() {
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Simulamos la carga de datos
  useEffect(() => {
    try {
      // Simula una llamada para obtener la colección
      const fetchData = async () => {
        // Aquí puedes simular un delay para representar una API
        const data = db.collection || [];
        setCollection(data);
        if (data.length > 0) {
          setSelectedProduct(data[0]);
          setSelectedImage(data[0].imagen_1);
        }
        setLoading(false);
      };

      fetchData();
    } catch (err) {
      setError("Error al cargar los productos.");
      setLoading(false);
    }
  }, []);

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
  };

  const handleBuyNow = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (collection.length === 0) return <p>No hay productos disponibles.</p>;

  const totalPrice = quantity * (selectedProduct.precio || 0);

  return (
    <div>
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
                alt={`Imagen ${index + 1}`}
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
          <button className="buy-now" onClick={handleBuyNow}>
            BUY IT NOW
          </button>

          <p className="total-price">Total: $ {totalPrice.toLocaleString()}</p>
          <div className="cart-info">
            <div className="tipo-Vertical">
              {collection.map((item, index) => (
                <img
                  key={index}
                  src={item.imagen_1}
                  alt={`Imagen del producto ${index + 1}`}
                  className="thumbnail"
                  onClick={() => handleProductClick(item)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Detalles del Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedProduct.imagen_1}
            alt="Imagen del producto"
            style={{
              width: "100%",
              height: "330px",
              objectFit: "contain",
              marginBottom: "10px",
            }}
          />
          <h2>{selectedProduct.nombre}</h2>
          <p>
            Precio: $ {selectedProduct.precio?.toLocaleString() || "Sin precio"}
          </p>
          <p>Cantidad: {quantity}</p>
          <p>Total: $ {totalPrice.toLocaleString()}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={() => alert("Compra confirmada")}>
            Confirmar Compra
          </Button>
        </Modal.Footer>
      </Modal>
      <Footers />
    </div>
  );
}

export default Home;