import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone , faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "./Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='container'>
      <div className='footer1'>
        <Link to={"/"} className='fot-logo'>
            <img src='./images/logo_2.svg' alt='logo' />
        </Link>

        <ul>
            <li><Link to={"/"}>Главная</Link></li>
            <li><Link>Оборудования</Link></li>
            <li><Link to={"/lims"}>Lims</Link></li>
            <li><Link to={"/libary  "}>Библиотека</Link></li>
        </ul>

        <ul>
            <li><Link>События</Link></li>
            <li><Link>О компании</Link></li>
            <li><Link>Контакты</Link></li>
            <li><Link>Новинки</Link></li>
        </ul>

        <ul>
            <li><Link>Оставить заявку</Link></li>
        </ul>

        <div className='fot_phone'>
            <div className='fot_icon'>
                <FontAwesomeIcon icon={faPhone} style={{color: "#525252",}} />
                <FontAwesomeIcon icon={faEnvelope} style={{color: "#525252",}}/>
            </div>
            <div className='fot_number'>
                <p>+7 7172 95 51 11</p>
                <p>+7 7172 95 55 81</p>
                <p>info@qsig.kz</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
