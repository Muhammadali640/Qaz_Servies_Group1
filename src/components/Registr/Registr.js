import React from "react";
import "./Registr.css";

const Registr = () => {
  return (
    <div>
      <div className="contact2">
        {" "}
        <h2>Оставить заявку</h2>
        <div className="registr">
          <div className="registr_left">
            <p className="p1">Имя</p>
            <input type="text" />
            <p className="p2">E-mail</p>
            <input type="email" />
            <p className="p3">Номер телефона</p>
            <input type="phone" />

            <p className="p4">
              Ваша заявка будет обработана в течении 2-4 часов. С вамт
              обязательно свяжкутся. Ответ придет на почту которую вы уажете.
              <br></br>
              <br></br>
              <button>Оставить заявку</button>
            </p>
          </div>
          <div className="registr_right">
            <p className="p5">Комментарий</p>
            <textarea name="comment" id="" cols="34" rows="16"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registr;
