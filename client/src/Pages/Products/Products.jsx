import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="products-container">
      <h1>Our Products</h1>

      <div className="product-section">
        <div className="product-card">
          <h2>Stack Overflow for Teams</h2>
          <p>
            Where developers and technologists share private knowledge with
            coworkers.
          </p>
          <Link to="/ForTeams" className="product-link">Learn More</Link>
        </div>

        <div className="product-card">
          <h2>Stack Overflow Public Q&A</h2>
          <p>
            A public platform building the definitive collection of coding questions & answers.
          </p>
          <a
            href="https://stackoverflow.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="product-link"
          >
            Visit Site
          </a>
        </div>

        <div className="product-card">
          <h2>Collectives™ on Stack Overflow</h2>
          <p>
            Find centralized, trusted content and collaborate around the technologies you use most.
          </p>
          <a
            href="https://stackoverflow.com/collectives"
            target="_blank"
            rel="noopener noreferrer"
            className="product-link"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
