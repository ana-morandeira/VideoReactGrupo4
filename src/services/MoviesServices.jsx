import axios from "axios";

const API_URL = "http://localhost:3000/coproducciones";

export const getAllMovies = async () => {
  try {
    const response = await axios.get(API_URL);

    console.log("API RAW DATA:", response.data);

    // Aseguramos que siempre devolvemos un array
    if (Array.isArray(response.data)) {
      return response.data;
    }

    // Fallback defensivo (por si cambia el backend)
    if (response.data.coproducciones) {
      return response.data.coproducciones;
    }

    return [];
  } catch (error) {
    console.error("Error al obtener las películas:", error);
    return [];
  }
};


export const createMovie = async (paisNombre, movieData) => {
  try {
    const res = await axios.get(API_URL);
    const paises = res.data;

    const paisData = paises.find((p) => p.pais === paisNombre);
    if (!paisData) throw new Error("País no encontrado");

    const nuevaPeli = {
      ...movieData,
      id: Date.now(),
    };

    paisData.peliculas.push(nuevaPeli);

    await axios.put(`${API_URL}/${paisData.id}`, paisData);
    return true;
  } catch (error) {
    console.error("Error al crear la película:", error);
    throw error;
  }
};

export const updateMovie = async (paisNombre, peliId, movieData) => {
  try {
    const res = await axios.get(API_URL);
    const paises = res.data;

    const paisData = paises.find((p) => p.pais === paisNombre);
    if (!paisData) throw new Error("País no encontrado");

    paisData.peliculas = paisData.peliculas.map((p) =>
      p.id === peliId ? { ...p, ...movieData } : p
    );

    await axios.put(`${API_URL}/${paisData.id}`, paisData);
    return true;
  } catch (error) {
    console.error("Error al actualizar la película:", error);
    throw error;
  }
};

export const deleteMovieFromServer = async (paisNombre, peliId) => {
  try {
    const res = await axios.get(API_URL);
    const paises = res.data;

    const paisData = paises.find((p) => p.pais === paisNombre);
    if (!paisData) throw new Error("País no encontrado");

    paisData.peliculas = paisData.peliculas.filter(
      (p) => p.id !== peliId
    );

    await axios.put(`${API_URL}/${paisData.id}`, paisData);
    return true;
  } catch (error) {
    console.error("Error al eliminar la película:", error);
    throw error;
  }
};