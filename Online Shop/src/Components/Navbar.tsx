import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState<boolean>(true);

  const context = useContext(CartContext);

  const handleTheme = () => {
    setTheme((prev) => !prev);
    document.body.classList.toggle("dark");
  };

  const count = context?.cart.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  return (
    <div className="navbar">
      <Link className="logo" to="/">
        Blackmarket
      </Link>
      <nav className="nav-wrapper">
        <button onClick={handleTheme} className="theme-switcher">
          <img
            src={
              theme
                ? "https://res.cloudinary.com/dbfn5lnvx/image/upload/v1732813039/react-tutorial/superm-v2/light.svg"
                : "https://res.cloudinary.com/dbfn5lnvx/image/upload/v1732813039/react-tutorial/superm-v2/dark.svg"
            }
            width="24"
            height="24"
            alt={theme ? "Light Theme" : "Dark theme"}
          />
        </button>
        <ul className="nav">
          <li className="nav-item">
            <Link className="cursor-pointer" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="cursor-pointer" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="cursor-pointer" to="/products">
              Products
            </Link>
          </li>
        </ul>
        <Link className="btn btn-nav" to="/cart">
          Cart ({count})
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
