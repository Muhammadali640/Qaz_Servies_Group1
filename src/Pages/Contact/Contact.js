/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Registr from "../../components/Registr/Registr";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="contact_img">
          <div className="img_top">
            {/* <video src="../images/videos.mp4" autoPlay /> */}
            <div className="img_text">
              <img src="../images/qazservise_logo_contact.svg" />
              <div className="img_bot_text">
                <div className="contact_location">
                  <div className="location">
                    <div className="location_icon">
                      <FontAwesomeIcon
                        style={{ color: "white" }}
                        icon={faPhone}
                      />
                      {/* <hr /> */}
                    </div>

                    <div className="location_text">
                      <p>+7(7172)955111</p>
                      <p>+7(7172)95558</p>
                    </div>
                  </div>

                  <div className="location">
                    <div className="location_icon">
                      <FontAwesomeIcon
                        style={{ color: "white" }}
                        icon={faLocationDot}
                      />
                      {/* <hr /> */}
                    </div>

                    <div className="location_text">
                      <p>пр-тКошкарбаева1/2,оф.204,</p>
                      <p>БЦ“Downtown”, блок“Manhattan”</p>
                    </div>
                  </div>

                  <div className="location">
                    <div className="location_icon">
                      <FontAwesomeIcon
                        style={{ color: "white" }}
                        icon={faEnvelope}
                      />
                      {/* <hr /> */}
                    </div>

                    <div className="location_text">
                      <p>sales@qsig.kz</p>
                      <p>+7(7172)95558</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="img_bot">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24296.97894791714!2d71.91959226149332!3d40.42828920824566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc7f5de537f203%3A0xd0b199f46aaa9c9!2z0JDRgNGB0LjRhCwg0KTQtdGA0LPQsNC90YHQutCw0Y8g0J7QsdC70LDRgdGC0YwsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1709637881263!5m2!1sru!2s"
              width={"100%"}
              height={"100%"}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Registr */}
        <Registr />
        {/* Footer */}
        <Footer />
      </div>

    </div>
  );
};

export default Contact;
