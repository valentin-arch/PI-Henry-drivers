import { Link, NavLink } from "react-router-dom";
import stayle from "../Navbar/Navbar.module.css";
import SearchBar from "../SearchBar/searchBar";
import { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // const toggleButtons = () => {
  //   setShowButtons(!showButtons);
  // };
  return (
    <nav className={stayle.mainNavbar}>
      <Link to="/">
        <img
          className={stayle.imgButton}
          src="https://brandemia.org/sites/default/files/inline/images/f1-logo-red-on-black-e1511528736760.png"
          alt=""
        />
      </Link>
      <div
        className={stayle.menu}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          class="main-grid-item-icon"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <line x1="21" x2="3" y1="10" y2="10" />
          <line x1="21" x2="3" y1="6" y2="6" />
          <line x1="21" x2="3" y1="14" y2="14" />
          <line x1="21" x2="3" y1="18" y2="18" />
        </svg>
      </div>{" "}
      <ul className={menuOpen ? stayle.open : ""}>
        <li className={stayle.home}>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className={stayle.form}>
          <NavLink to="/create">Form</NavLink>
        </li>
        <li className={stayle.search}>
          <SearchBar />
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
