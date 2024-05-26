import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortOption, setSortOption] = useState("default");
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(props.category);

  useEffect(() => {
    // Reset dropdown when category changes
    setShowDropdown(false);
    setCurrentCategory(props.category);
  }, [props.category]);

  // Function to handle sorting
  const handleSort = (option) => {
    setSortOption(option);
  };

  // Sorting the products based on the selected option
  const sortedProducts = [...all_product].sort((a, b) => {
    if (props.category !== a.category) return 0; // Skip non-category items

    if (sortOption === "price-asc") {
      return a.new_price - b.new_price;
    } else if (sortOption === "price-desc") {
      return b.new_price - a.new_price;
    } else {
      return 0; // Default sorting (no sorting)
    }
  });

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div
          className="shopcategory-sort"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Sort by <img src={dropdown_icon} alt="" />
          <div className={`dropdown-menu ${showDropdown ? "active" : ""}`}>
            <div onClick={() => handleSort("price-asc")}>
              Price: Low to High
            </div>
            <div onClick={() => handleSort("price-desc")}>
              Price: High to Low
            </div>
          </div>
        </div>
      </div>
      <div className="shopcategory-products">
        {sortedProducts.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <Link
        to="/"
        className="shopcategory-loadmore"
        onClick={() => window.scrollTo(0, 0)}
      >
        Explore More
      </Link>
    </div>
  );
};

export default ShopCategory;
