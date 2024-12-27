import axios from "axios";

export async function getData(dbArray) {
  return new Promise(async (resolve, reject) => {
    setTimeout(async () => {
      try {
        if (Array.isArray(dbArray)) {
          const response = await axios.get(dbArray);
          resolve(response.data); // Retorna los datos obtenidos
        } else {
          reject(new Error("El argumento proporcionado no es un array válido."));
        }
      } catch (error) {
        console.error("Error en el GET", error);
        reject(error); // Rechaza la promesa con el error
      }
    }, 0); // Puedes ajustar el tiempo de espera si es necesario
  });
}
