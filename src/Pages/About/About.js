import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const About = () => {
  return (
    <div>
      <div className="banner">
        {/* Slider - Swiper */}

        <Swiper
          className="slider"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop
        >
          <SwiperSlide className="slideer">
            <img
              src="../images/slider1.svg"
              alt="slider"
              style={{ width: "60%" }}
            />
          </SwiperSlide>
          <SwiperSlide className="slideer">
            <img
              src="../images/slider2.svg"
              alt="slider"
              style={{ width: "60%" }}
            />
          </SwiperSlide>
          <SwiperSlide className="slideer">
            <img
              src="../images/slider3.svg"
              alt="slider"
              style={{ width: "60%" }}
            />
          </SwiperSlide>
          <SwiperSlide className="slideer">
            <img
              src="../images/slider4.svg"
              alt="slider"
              style={{ width: "60%" }}
            />
          </SwiperSlide>
          <SwiperSlide className="slideer">
            <img
              src="../images/slider5.svg"
              alt="slider"
              style={{ width: "60%" }}
            />
          </SwiperSlide>
          <SwiperSlide className="slideer">
            <img
              src="../images/slider6.svg"
              alt="slider"
              style={{ width: "60%" }}
            />
          </SwiperSlide>
          <SwiperSlide className="slideer">
            <img
              src="../images/slider7.svg"
              alt="slider"
              style={{ width: "60%" }}
            />
          </SwiperSlide>
        </Swiper>

        {/* Slider - Swiper - end */}

        <div className="banner_text">
          <div className="text-top">
            <div className="banner-left">
              <h1>О компании</h1>
              <img src="../images/right.svg" alt="Right" />
            </div>
            <div className="banner-right">
              <p>
                Мы - казахстанская компания, специализирующаяся на поставках,
                сервисном и методическом обслуживании научного и аналитического
                оборудования в области элементного анализа Повседневная практика
                показывает, что укрепление и развитие структуры влечет за собой
                процесс внедрения и модернизации систем массового участия. Таким
                образом укрепление и развитие структуры представляет собой
                интересный эксперимент проверки существенных финансовых и
                административных условий. С другой стороны рамки и место
                обучения кадров способствует подготовки и реализации дальнейших
                направлений развития.
              </p>
              <div className="right-bot">
                <div className="key">
                  <img src="../images/key.svg" alt="key" />
                  <h4>Лаборатории под ключ</h4>
                </div>
                <div className="ten">
                  <img src="../images/ten.svg" alt="key" />
                  <h4>Более 10 лет на рынке</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="text-bot">
            <div className="link-text">
              <div className="link2">
                <h1>Наши пользователи</h1>
                <Link>Смотреть отзывы</Link>
              </div>
            </div>
            <div className="link-tv">
              <img src="../images/tv.svg" alt="logo" />
            </div>
          </div>
        </div>

        <div className="banner_logo">
          <img
            className="qazservice"
            src="../images/QAZSERVIСE i-GROUP.svg"
            alt="logo"
          />

          <img className="dom" src="../images/dom_uy.svg" alt="logo" />

          <div className="banner_location">
            <div className="location">
              <div className="location_icon">
                <FontAwesomeIcon icon={faPhone} />
                {/* <hr /> */}
              </div>

              <div className="location_text">
                <p>+7(7172)955111</p>
                <p>+7(7172)95558</p>
              </div>
            </div>

            <div className="location">
              <div className="location_icon">
                <FontAwesomeIcon icon={faLocationDot} />
                {/* <hr /> */}
              </div>

              <div className="location_text">
                <p>пр-тКошкарбаева1/2,оф.204,</p>
                <p>БЦ“Downtown”, блок“Manhattan”</p>
              </div>
            </div>

            <div className="location">
              <div className="location_icon">
                <FontAwesomeIcon icon={faEnvelope} />
                {/* <hr /> */}
              </div>

              <div className="location_text">
                <p>sales@qsig.kz</p>
                <p>+7(7172)95558</p>
              </div>
            </div>
          </div>

          <button>Оставить заявку</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
