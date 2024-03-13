import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <div className="container">
      <div className="products1">
        <h1>События</h1>
        <div className="product_imgs">
          <div className="imgs_left">
            <div className="img_top">
              <div className="product1 product_2">
                <div className="div_logo">
                  <h4>10 августа с 14:00 до 17:00</h4>
                </div>
                <p>
                  Курс повышения квалификации по методам термического анализа
                </p>
              </div>
              <div className="product4">
                <p>
                  Курс повышения квалификации по методам термического анализа
                </p>
              </div>
            </div>

            <div className="img_bot">
              <p>Курс повышения квалификации по методам термического анализа</p>
            </div>
          </div>
          <div className="imgs_right">
            <div className="boxes-images"></div>
            <div className="boxes-text">
              <p>Смотреть все события</p>
              <img src="./images/Vector (1).svg" alt="vektor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
