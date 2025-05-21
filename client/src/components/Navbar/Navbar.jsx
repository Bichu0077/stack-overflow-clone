import React, { useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";

import logo from "../../assets/logo.png";
import search from "../../assets/search-solid.svg";
import bars from "../../assets/bars-solid.svg";
import Avatar from "../../components/Avatar/Avatar";

import { setCurrentUser } from "../../actions/currentUser";
import "./Navbar.css";

const Navbar = ({ handleSlideIn }) => {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  }, [dispatch, navigate]);

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        handleLogout();
      }
    }
  }, [User?.token, handleLogout]);

  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);

  return (
    <nav className="nav">
      <div className="nav-left">
        <button className="menu-icon" onClick={handleSlideIn}>
          <img src={bars} alt="menu" width="18" />
        </button>
        <Link to="/" className="nav-logo">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/forteams" className="nav-link">For Teams</Link>
      </div>

      <div className="nav-center">
        <form className="search-form">
          <input type="text" placeholder="Search..." />
          <img src={search} alt="search" />
        </form>
      </div>

      <div className="nav-right">
        {User ? (
          <>
            <Avatar backgroundColor="#009dff" px="10px" py="7px" borderRadius="50%" color="white">
              <Link to={`/Users/${User.result._id}`} style={{ color: "white", textDecoration: "none" }}>
                {User.result.name.charAt(0).toUpperCase()}
              </Link>
            </Avatar>
            <button onClick={handleLogout} className="nav-auth-btn">Log out</button>
          </>
        ) : (
          <button
        className="nav-auth-btn"
        onClick={() => navigate("/Auth")}
        type="button"
      >
        Log in
      </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
