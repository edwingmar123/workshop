import { useEffect, useState } from "react";

const urlProductos = () => {
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/collection");
        if (!response.ok) {
          throw new Error("Error al cargar los datos");
        }
        const data = await response.json();
        setCollection(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { collection, loading, error };
};

export default urlProductos;
