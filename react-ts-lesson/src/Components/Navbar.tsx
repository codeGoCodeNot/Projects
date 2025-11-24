import { useState } from "react";

const Navbar = ({ onShowCart }: { onShowCart: () => void }) => {
  const [theme, setTheme] = useState<boolean>(true);

  const handleTheme = () => {
    setTheme((prev) => !prev);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="navbar">
      <a className="logo">Blackmarket</a>
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
            <a>Home</a>
          </li>
          <li className="nav-item">
            <a>Login</a>
          </li>
          <li className="nav-item">
            <a>Products</a>
          </li>
        </ul>
        <button onClick={onShowCart} className="btn btn-nav">
          Cart (0)
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
