import axios from "axios";

const API_URL = "http://localhost:3000/movies";

export const getAllMovies = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};