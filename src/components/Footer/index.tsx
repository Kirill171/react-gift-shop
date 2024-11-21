import React from 'react';
import './index.css';
import telegramImg from '@assets/telegram.png';
import vkImg from '@assets/vk.png';

export default function Footer() {
  return (
    <footer>
      <h2 className="h2-text">Как с нами связаться</h2>
      <section className='container'>
        <div className="footer-container-1">
          <h4 className='footer-h4-text'>Наши контакты</h4>
          <ul className='custom-list'>
            <li className='item-1'>+7(495) 123-45-67</li>
            <li className='item-2'>г. Москва, ул. Тверская, дом. 1</li>
            <li className='item-3'>mail@site.ru</li>
          </ul>
        </div>

        <div className="footer-container-2">
          <h4 className='footer-h4-text'>Напишите нам</h4>
          <div className="links">
            <a href="https://t.me/Snezhok_Sema" target="_blank">
              <img src={telegramImg} alt="Фото с ссылкой на telegram" />
            </a>
            <a href="https://vk.com/snezhoksema" target="_blank">
              <img src={vkImg} alt="Фото с ссылкой на vk" />
            </a>
          </div>
        </div>
      </section>
      <hr className='hr' />
      <div className="logo">© GIFT<span className='dot'>.</span>Store</div>
    </footer>
  )
}