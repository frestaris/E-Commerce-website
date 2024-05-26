import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      <Link to="/" onClick={() => window.scrollTo(0, 0)}>
        HOME
      </Link>
      <img src={arrow_icon} alt="" />
      <Link to={`/${product.category}`} onClick={() => window.scrollTo(0, 0)}>
        {product.category}
      </Link>
      <img src={arrow_icon} alt="" />
      {product.name}
    </div>
  );
};

export default Breadcrum;
