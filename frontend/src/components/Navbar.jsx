// frontend/src/components/Navbar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// To display counts, you'd import your context hooks here (once created)
// import { useCart } from '../context/CartContext'; // Example
// import { useFavorites } from '../context/FavoritesContext'; // Example

const Navbar = () => {
  // Example: Get cart and favorites counts from context
  // const { cartItemsCount } = useCart(); // Assuming your context provides a count
  // const { favoritesCount } = useFavorites(); // Assuming your context provides a count

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">Olcademy Perfumes</Link>
        <div className="navbar-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink> {/* Added 'end' prop for exact match on root */}
          <NavLink to="/collections" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Collections</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact Us</NavLink>
          
          {/* Favorites Link */}
          <NavLink to="/favorites" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Favorites
            {/* {favoritesCount > 0 && <span className="badge">{favoritesCount}</span>} */} {/* Optional: Badge for count */}
          </NavLink>

          {/* Cart Link */}
          <NavLink to="/cart" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Cart
            {/* {cartItemsCount > 0 && <span className="badge">{cartItemsCount}</span>} */} {/* Optional: Badge for count */}
          </NavLink>

          <NavLink to="/login" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Login</NavLink>
          <NavLink to="/signup" className={({ isActive }) => isActive ? "nav-link active" : "nav-link auth-link-signup"}>Sign Up</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;