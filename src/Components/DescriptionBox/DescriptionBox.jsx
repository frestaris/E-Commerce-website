import React, { useState } from "react";
import "./DescriptionBox.css";
import review1 from "../Assets/review1.jpg";
import review2 from "../Assets/review2.jpg";
import review3 from "../Assets/review3.jpg";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div
          className={`descriptionbox-nav-box ${
            activeTab === "description" ? "active" : "fade"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </div>
        <div
          className={`descriptionbox-nav-box ${
            activeTab === "reviews" ? "active" : "fade"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews (112)
        </div>
      </div>
      {activeTab === "description" ? (
        <div className="descriptionbox-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque,
            voluptates incidunt ratione a fugiat odit autem harum officia ab
            sequi alias, officiis libero veritatis similique commodi architecto,
            dolores nemo. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Asperiores doloribus nobis illo earum placeat! Corrupti illum
            officia ipsa ea, error, saepe ut atque dignissimos quam sit optio
            sint debitis molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ut,
            accusamus esse cupiditate soluta impedit dolor veritatis porro
            laborum voluptas iure perferendis sunt, totam maxime commodi
            consectetur amet unde nobis!
          </p>
        </div>
      ) : (
        <div className="descriptionbox-reviews">
          <div className="review">
            <p>This shoe is fantastic!</p>
            <img src={review1} alt="Review 1" />
            <div className="stars">
              <img src={star_icon} alt="star" />
              <img src={star_icon} alt="star" />
              <img src={star_icon} alt="star" />
              <img src={star_icon} alt="star" />
              <img src={star_dull_icon} alt="star" />
            </div>
          </div>
          <div className="review">
            <p>I had a great experience with this product.</p>
            <img src={review2} alt="Review 2" />
            <div className="stars">
              <img src={star_icon} alt="star" />
              <img src={star_icon} alt="star" />
              <img src={star_icon} alt="star" />
              <img src={star_dull_icon} alt="star" />
              <img src={star_dull_icon} alt="star" />
            </div>
          </div>
          <div className="review">
            <p>OMG! I can walk again!</p>
            <img src={review3} alt="Review 3" />
            <div className="stars">
              <img src={star_icon} alt="star" />
              <img src={star_icon} alt="star" />
              <img src={star_icon} alt="star" />
              <img src={star_icon} alt="star" />
              <img src={star_icon} alt="star" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DescriptionBox;
