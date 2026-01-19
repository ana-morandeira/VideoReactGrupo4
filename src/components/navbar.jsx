const Navbar = () => {
  return (
    <nav className="bg-orange-600 text-white px-6 py-4 flex justify-between items-center">

      <h1 className="text-xl font-semibold">
        My Library
      </h1>

      <ul className="flex gap-6">
        <li className="hover:text-black cursor-pointer">
          Home
        </li>
        <li className="hover:text-black cursor-pointer">
          Libros
        </li>
        <li className="hover:text-black cursor-pointer">
          Ubicación
        </li>
      </ul>

    </nav>
  )
}

export default Navbar