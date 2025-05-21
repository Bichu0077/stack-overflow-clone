import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.svg";

const LeftSidebar = ({ slideIn, handleSlideIn }) => {
  const slideInStyle = {
    transform: "translateX(0%)",
  };

  const slideOutStyle = {
    transform: "translateX(-100%)",
  };

  const activeClassName = "active";

  return (
    <div
      className="left-sidebar"
      style={slideIn ? slideInStyle : slideOutStyle}
    >
      <nav className="side-nav">
        <NavLink
          to="/"
          onClick={handleSlideIn}
          className={({ isActive }) =>
            `side-nav-links ${isActive ? activeClassName : ""}`
          }
        >
          <p>Home</p>
        </NavLink>

        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>

          <NavLink
            to="/Questions"
            onClick={handleSlideIn}
            className={({ isActive }) =>
              `side-nav-links ${isActive ? activeClassName : ""}`
            }
          >
            <img src={Globe} alt="Globe" />
            <p style={{ paddingLeft: "10px" }}>Questions</p>
          </NavLink>

          <NavLink
            to="/Tags"
            onClick={handleSlideIn}
            className={({ isActive }) =>
              `side-nav-links ${isActive ? activeClassName : ""}`
            }
            style={{ paddingLeft: "40px" }}
          >
            <p>Tags</p>
          </NavLink>

          <NavLink
            to="/Users"
            onClick={handleSlideIn}
            className={({ isActive }) =>
              `side-nav-links ${isActive ? activeClassName : ""}`
            }
            style={{ paddingLeft: "40px" }}
          >
            <p>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
