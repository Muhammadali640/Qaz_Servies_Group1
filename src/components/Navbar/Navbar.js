import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPhone,
  faEnvelope,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [bars, setBars] = useState(false);

  return (
    <div className="container">
      <div className="navbar">
        <div className="nav1">
          <h1>
            <Link to={"/"}>
              <img src="./images/logo.png" alt="Logo !" />
            </Link>
          </h1>
          <ul>
            <li>
              <NavLink className="link" to={"/obraduvanie"}>Оборудование</NavLink>
            </li>
            <li>
              <NavLink className="link" to={"/lims"}>
                LIMS
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to={"/library"}>
                Библиотека
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to={"/about"}>
                О компании
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to={"/events"}>
                События
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to={"/contact"}>
                Контакты
              </NavLink>
            </li>
          </ul>
          <NavLink to={"/search"}>
            <FontAwesomeIcon
              className="serach_icon"
              icon={faMagnifyingGlass}
            />
          </NavLink>
          <div className="media_icon">
            <NavLink to={"/search"}>
              <FontAwesomeIcon
                className="serach_icon2"
                icon={faMagnifyingGlass}
              />
            </NavLink>
            <FontAwesomeIcon
              onClick={() => setBars(!bars)}
              className="bars_icon"
              icon={faBars}
            />
          </div>
          <div className={bars ? "media_ul active" : "media_ul"}>
            <FontAwesomeIcon
              onClick={() => setBars(false)}
              className="exit"
              icon={faXmark}
            />
            <ul>
              <li>
                <Link className="link active" to={"/obraduvanie"}>Оборудование</Link>
              </li>
              <li>
                <Link className="link" to={"/lims"}>
                  LIMS
                </Link>
              </li>
              <li>
                <Link className="link" to={"/library"}>
                  Библиотека
                </Link>
              </li>
              <li>
                <Link className="link" to={"/about"}>
                  О компании
                </Link>
              </li>
              <li>
                <Link className="link" to={"/events"}>
                  События
                </Link>
              </li>
              <li>
                <Link className="link" to={"/contact"}>
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="nav2">
        <hr />
        <div className="number_item">
          <FontAwesomeIcon icon={faPhone} />
          <div className="phone_text">
            <p>+7 7172 95 51 11</p>
            <p>+7 7172 95 51 81</p>
          </div>
        </div>
        <hr />
        <div className="number_email">
          <FontAwesomeIcon icon={faEnvelope} />
          <div className="email_text">
            <p className="email">info@qsig.kz</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
