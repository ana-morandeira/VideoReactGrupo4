import { useState, useEffect } from "react";
import { createMovie, updateMovie } from "../../services/MoviesServices";

const AddMovie = ({ MovieEdit, onFormSubmit }) => {
  const [titulo, setTitulo] = useState("");
  const [director, setDirector] = useState("");
  const [año, setAño] = useState("");
  const [genero, setGenero] = useState("");
  const [argumento, setArgumento] = useState("");
  const [imagen, setImagen] = useState("");
  const [imageCartel, setImageCartel] = useState("");
  const [pais, setPais] = useState("Argentina");

  
  useEffect(() => {
    if (MovieEdit) {
      setTitulo(MovieEdit.titulo || "");
      setDirector(MovieEdit.director || "");
      setAño(MovieEdit.año || "");
      setGenero(MovieEdit.genero || "");
      setArgumento(MovieEdit.argumento || "");
      setImagen(MovieEdit.imagen || "");
      setImageCartel(MovieEdit.imageCartel || "");
      setPais(MovieEdit.pais || "Argentina");
    }
  }, [MovieEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const movieData = {
      titulo,
      director,
      año: Number(año),
      genero,
      argumento,
      imagen,
      imageCartel,
    };

    if (MovieEdit) {
      await updateMovie(pais, MovieEdit.id, movieData);
    } else {
      await createMovie(pais, movieData);
    }

    onFormSubmit();
    resetForm();
  };

  const resetForm = () => {
    setTitulo("");
    setDirector("");
    setAño("");
    setGenero("");
    setArgumento("");
    setImagen("");
    setImageCartel("");
    setPais("Argentina");
  };

  const inputClass =
    "bg-gray-900 text-white placeholder-gray-400 border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto mt-8 mb-16 p-6 rounded-xl bg-gray-800 shadow-xl">
      <h1 className="text-2xl font-bold mb-6 text-center text-white">
        {MovieEdit ? "Editar Película" : "Añadir Película"}
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Título"
          className={inputClass}
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Director"
          className={inputClass}
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Año"
          className={inputClass}
          value={año}
          onChange={(e) => setAño(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Género"
          className={inputClass}
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
        />

        <textarea
          placeholder="Argumento"
          className={`${inputClass} resize-none`}
          value={argumento}
          onChange={(e) => setArgumento(e.target.value)}
        />

        <input
          type="text"
          placeholder="Ruta imagen (src/assets/...)"
          className={inputClass}
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
        />

        <input
          type="text"
          placeholder="Ruta cartel (src/assets/...)"
          className={inputClass}
          value={imageCartel}
          onChange={(e) => setImageCartel(e.target.value)}
        />

        <select
          className={inputClass}
          value={pais}
          onChange={(e) => setPais(e.target.value)}
        >
          <option>Argentina</option>
          <option>México</option>
          <option>Francia</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          {MovieEdit ? "Guardar cambios" : "Guardar película"}
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
