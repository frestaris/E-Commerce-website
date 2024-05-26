import React, { useContext, useState } from "react";
import "./ProductDispaly.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;

  const { addToCart } = useContext(ShopContext);
  const [mainImage, setMainImage] = useState(product.image[0]);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {product.image.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product image ${index + 1}`}
              onClick={() => setMainImage(img)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={mainImage}
            alt="Main product"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
          voluptatibus quam beatae maxime, vero odit ipsam facere voluptatem
          itaque veniam ipsum inventore culpa qui ratione molestias praesentium
          voluptas, consequuntur similique.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        {/*  TO FIX CATEGORY */}
        <p className="productdisplay-right-category">
          <span>Category: </span>
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          , Shoe - Sneaker - Sport
        </p>

        <p className="productdisplay-right-category">
          <span>Tags:</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
