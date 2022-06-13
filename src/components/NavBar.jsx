import { FaUserAlt, FaShoppingCart, FaArchive } from "react-icons/fa";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <article className="nav-bar-container">
      <div className="navbar">
        <Link className="link-logo" to="/">
          <p className="logo">E-commerce</p>
        </Link>
        <div className="links">
          <li className="link">
            <Link className="icon-button" to="/login">
              <FaUserAlt />
            </Link>
          </li>
          <li className="link  link2">
            <Link className="icon-button" to="/purchases">
              <FaArchive />
            </Link>
          </li>
          <li className="link">
            <button className="cart-icon">
              <FaShoppingCart />
            </button>
          </li>
        </div>
      </div>
    </article>
  );
};

export default Navbar;
