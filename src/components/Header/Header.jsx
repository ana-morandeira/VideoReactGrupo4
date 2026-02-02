import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";

function Header() {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <Banner />
    </div>
  );
}

export default Header;