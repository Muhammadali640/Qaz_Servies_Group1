import React from "react";
import "./Events.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Events = () => {
  return (
    <div>

      <div className="events">
        <h1>События</h1>

        <div className="events_banner">

          <div className="events_box">
            <img src="../images/yangi_yil.png" alt="Masseg" />
            <div className="events_text">
              <h2>Скоро Новый Год!</h2>
              <p>
                Повседневная практика показывает, что постоянное
                информационно-пропагандистское обеспечение нашей деятельности
                позволяет оценить значение соответствующий условий активизации.
                Значимость этих проблем настолько очевидна.
              </p>
              <hr />
            </div>
          </div>


          <div className="events_boxes">
            <div className="events_text2">
              <h2>Скоро Новый Год!</h2>
              <p>
                Повседневная практика показывает, что постоянное
                информационно-пропагандистское обеспечение нашей деятельности
                позволяет оценить значение соответствующий условий активизации.
                Значимость этих проблем настолько очевидна.
              </p>
              <hr />
            </div>

            <img src="../images/DNK.png" alt="Masseg" />
          </div>
          

          <div className="events_box">
            <img src="../images/ximya2.png" alt="Masseg" />
            <div className="events_text">
              <h2>Скоро Новый Год!</h2>
              <p>
                Повседневная практика показывает, что постоянное
                информационно-пропагандистское обеспечение нашей деятельности
                позволяет оценить значение соответствующий условий активизации.
                Значимость этих проблем настолько очевидна.
              </p>
              <hr />
            </div>
          </div>


          <div className="events_boxes">
            <div className="events_text2">
              <h2>Скоро Новый Год!</h2>
              <p>
                Повседневная практика показывает, что постоянное
                информационно-пропагандистское обеспечение нашей деятельности
                позволяет оценить значение соответствующий условий активизации.
                Значимость этих проблем настолько очевидна.
              </p>
              <hr />
            </div>

            <img src="../images/texnologiya.png" alt="Masseg" />
          </div>



          <div className="events_box">
            <img src="../images/neft.png" alt="Masseg" />
            <div className="events_text">
              <h2>Скоро Новый Год!</h2>
              <p>
                Повседневная практика показывает, что постоянное
                информационно-пропагандистское обеспечение нашей деятельности
                позволяет оценить значение соответствующий условий активизации.
                Значимость этих проблем настолько очевидна.
              </p>
              <hr />
            </div>
          </div>


          <div className="events_boxes">
            <div className="events_text2">
              <h2>Скоро Новый Год!</h2>
              <p>
                Повседневная практика показывает, что постоянное
                информационно-пропагандистское обеспечение нашей деятельности
                позволяет оценить значение соответствующий условий активизации.
                Значимость этих проблем настолько очевидна.
              </p>
              <hr />
            </div>

            <img src="../images/quvur.png" alt="Masseg" />
          </div>

        </div>

        <div className="more">
            <Link>еще события</Link>
            <img src="../images/Vector (2).svg" alt="Masseg" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Events;
