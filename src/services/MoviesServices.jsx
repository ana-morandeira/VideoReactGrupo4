import axios from "axios";

const API_URL = "http://localhost:8080/movies";

export const getAllMovies = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log("API RAW DATA:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al obtener las películas:", error);
    return [];
  }
};

export const createMovie = async (movieData) => {
  try {
    const response = await axios.post(API_URL, movieData);
    return response.data;
  } catch (error) {
    console.error("Error al crear la película:", error);
    throw error;
  }
};

export const updateMovie = async (id, movieData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, movieData);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar la película:", error);
    throw error;
  }
};

export const deleteMovieFromServer = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return true;
  } catch (error) {
    console.error("Error al eliminar la película:", error);
    throw error;
  }
};