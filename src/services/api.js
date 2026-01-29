const API_URL = "http://localhost:3000/coproducciones"

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
