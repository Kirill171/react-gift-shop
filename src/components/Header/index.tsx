import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import basket from '../../assets/basket.png';
import { auth } from '../../firebase/firebaseConfig';
import { useUser } from '../../contexts/UserContext';
import './index.css';

export default function Header() {
  const { user } = useUser();
  return (
    <header>
      <div className='header'>
        <Link to='/' className='logo-link'>GIFT<span className='dot'>.</span>Store</Link>
        <NavLink to='/'>Главная</NavLink>
        <NavLink to='/catalog'>Каталог</NavLink>
        <NavLink to='/basket'>Корзина</NavLink>
        <Link to='/basket' className='basket-link'>
          <img className="basket-img" src={basket} alt="Корзина" />
        </Link>
        {user ?
          <button onClick={() => auth.signOut()} className='sign-out'>Выйти</button>
          :
          <>
            <Link to='/register' className='sign-up'>Регистрация</Link>
            <Link to='/login' className='sign-in'>Вход</Link>
          </>
        }
      </div>
    </header>
  )
}
