const API_URL = "http://localhost:8080/movies"

export const getMovies = async () => {
  try {
    const response = await fetch(API_URL)

    if (!response.ok) {
      throw new Error("Error al obtener Películas")
    }

    return await response.json()
  } catch (error) {
    console.error("getUsers:", error)
    throw error
  }
}
