import React from 'react';
import './index.css';
import cont1Img from '@assets/7.jpg';
import cont2Img from '@assets/8.jpg';
import olImg from '@assets/ol.jpg'
import cont4Img1 from '@assets/9.jpg';
import cont4Img2 from '@assets/10.jpg';
import cont4Img3 from '@assets/11.jpg';
import cont4Img4 from '@assets/12.jpg';

export default function HomePage() {
  return (
    <>
      <section className='container-background-img'>
        <section className='container'>
          <h1>Доставка подарка <span className='new-line'>с уникальной упаковкой</span></h1>
          <span className='container-text'>Мы не только доставим ваш сюрприз, но и подберём для него уникальную упаковку</span>
          <button className='container-button'>Выбрать подарок</button>
        </section>
      </section>

      <section>
        <section className='container-1'>
          <div className="container-1-text">
            <h4 className='h4-text'>Специальное предложение</h4>
            <span className='span-1'>Подписка на доставку новогодней коробочки открыта</span>
            <span className='span-2'>С 20 по 31 декабря при заказе двух новогодних коробочек действует скидка − 25%</span>
            <button className='container-1-button'>Заказать</button>
          </div>

          <div className="container-1-image">
            <img className='container-1-img' src={cont1Img} alt="Фото к первому блоку" />
          </div>
        </section>



        <section className='container-2'>
          <div className="container-2-image">
            <img className='container-2-img' src={cont2Img} alt="Фото к второму блоку" />
          </div>

          <div className="container-2-text">
            <h2 className='h2-text'>Как заказать подарок</h2>
            <div className="ol">
              <div className="ol-image">
                <img className='ol-img' src={olImg} alt="нумерация в виде блок схемы" />
              </div>
              <ol>
                <li>Оставить заявку можно у нас на сайте или заказать <p>обратный звонок</p></li>
                <li>В течении 30 минут наш менеджер свяжется с Вами <p>для обсуждения деталей заявки</p></li>
                <li>Доставим подарок до адресата в указанное время</li>
              </ol>
            </div>
            <button className='container-2-button'>Выбрать подарок</button>
          </div>
        </section>
      </section>

      <section className='container-3'>
        <h2 className='h2-text'>Гарантии качества</h2>
        <div className="text-blocks">
          <div className="quality-goods">
            <div className='icon icon-heart'></div>
            <h4 className='h4-text'>Только качественные товары в наборах</h4>
            <span className='span-text'>Наши продакт-менеджеры тестируют и отбирают лучшее среди десятков поставщиков</span>
          </div>
          <div className="safe-delivery">
            <div className='icon icon-box'></div>
            <h4 className='h4-text'>Весь набор доставят в сохранности</h4>
            <span className='span-text'>Хрупкие предметы обернуты пузырчатой пленкой, пустоты заполнены наполнителем, а снаружи транспортная коробка</span>
          </div>
          <div className="payment-options">
            <div className='icon icon-verified'></div>
            <h4 className='h4-text'>Множество вариантов оплаты</h4>
            <span className='span-text'>Все способы оплаты, как онлайн, так и при получении — официально с кассовым чеком</span>
          </div>
          <div className="matching-sets">
            <div className='icon icon-like'></div>
            <h4 className='h4-text'>Наборы полностью соответствуют фото и составу</h4>
            <span className='span-text'>Наше производство оснащено складской терминальной системой, ошибку совершить невозможно</span>
          </div>
          <div className="deliver-on-time">
            <div className='icon icon-history'></div>
            <h4 className='h4-text'>Мы доставляем коробочки-подарки точно в срок</h4>
            <span className='span-text'>Точность доставки для нас — один из важнейших и основных приоритетов нашей работы</span>
          </div>
        </div>
      </section>

      <section className='container-4'>
        <img src={cont4Img1} alt="Фото подарков 1" />
        <img src={cont4Img2} alt="Фото подарков 2" />
        <img src={cont4Img3} alt="Фото подарков 3" />
        <img src={cont4Img4} alt="Фото подарков 4" />
      </section>
    </>
  )
}