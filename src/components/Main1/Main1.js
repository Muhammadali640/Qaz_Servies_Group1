import React from "react";
import "./Main1.css";

const Main1 = () => {
  return (
    <div className="container">
      <div className="main1">
        <div className="left-box"></div>
        <div className="right-box">
          <div className="right-btn">
            <p>Оставьте заявку, и мы обязательно с вами свяжемся</p>
            <button>Оставить заявку</button>
          </div>
          <div className="right-text">
            <div className="spen">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="indicator">
                <p>Подробнее о компании</p>
                <img src="../images/Vector.svg" alt="indicator"/>
            </div>
            <h1>QAZSERVICE i-GROUP</h1>
            <p>Мы - казахстанская компания, специализирующаяся на поставках, сервисном и методическом обслуживании научного и аналитического оборудования в области элементного анализа</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main1;
