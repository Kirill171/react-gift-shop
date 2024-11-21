import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../../firebase/firebaseConfig';
import './index.css';
import { useUser } from '../../contexts/UserContext';

const provider = new GoogleAuthProvider();


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useUser();

  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';

  function login(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        setUser(user);
        setError('');
        setEmail('');
        setPassword('');
        navigate(fromPage, { replace: true });
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
            setError('Некорректный email адрес.');
            break;
          case 'auth/user-disabled':
            setError('Пользователь отключён.');
            break;
          case 'auth/user-not-found':
            setError('Пользователь не найден.');
            break;
          case 'auth/wrong-password':
            setError('Неверный пароль.');
            break;
          default:
            setError('Ошибка входа. Попробуйте еще раз.');
            break;
        }
      });
  }

  function loginWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate('/');
      })
      .catch((error) => {
        console.error('Ошибка входа с Google:', error);
        setError('Ошибка входа с Google');
      });
  }

  return (
    <div className='background-blue'>
      <hr className='hr catalog-hr' />
      <section className='login-container'>
        <form>
          <h2>Вход</h2>
          <input
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
          />

          <input
            placeholder='Пароль'
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />

          <Link className='register-link' to='/register'>Нет аккаунта?</Link>

          {error && <p className='error-text'>{error}</p>}

          <button onClick={login} className='sign-in-button'>Войти</button>
          <p className='sign-in-text'>или</p>
          <button type="button" onClick={loginWithGoogle} className='sign-in-with-google'>Войти с помощью Google</button>
        </form>
      </section>
    </div>
  )
}
