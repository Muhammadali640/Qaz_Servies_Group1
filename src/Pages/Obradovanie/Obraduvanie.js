import React from 'react'
import "./Obraduvanie.css"
import { NavLink } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

const Obraduvanie = () => {
  return (
    <div>
      <div className='obraduvenie'>
        <div className='obraduvanie_top'>
            <div className='top_img'>
                <h1>Оборудования</h1>
                <h6>по группам</h6>
                <img src='../images/obraduvanie_top.svg' alt='logo' />
            </div>
            <div className='top_text'>
                <h3>Хроматография и масспектрометрия</h3>
                <ul>
                    <li><NavLink>Оптические и стилусные профилометры</NavLink></li>
                    <li><NavLink>Наномеханические испытания</NavLink></li>
                    <li><NavLink>РФЭ и Оже-спектрометры</NavLink></li>
                    <li><NavLink>Системы мик	роанализа для электронных микроскопов</NavLink></li>
                    <li><NavLink>Субмикронная ИК-спектроскопия</NavLink></li>
                    <li><NavLink>Сканирующая зондовая микроскопия</NavLink></li>
                    <li><NavLink>Анализаторы толщины пленок Filmetrics</NavLink></li>
                    <li><NavLink>Стандарты для калибровки оборудования для исследования поверхности</NavLink></li>
                    <li><NavLink>Зонды АСМ</NavLink></li>
                    <li><NavLink>Виброзащита высокоточного оборудования</NavLink></li>
                </ul>
            </div>
        </div>
        <div className='obraduvanie_bot'>
            <div className='bot_img'></div>
            <div className='bot_text'>
                <h3>По области применения</h3>
                <img src='../images/bot_img.svg' alt='Text' />
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Obraduvanie
