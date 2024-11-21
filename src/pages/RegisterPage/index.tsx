import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../../firebase/firebaseConfig';
import './index.css';
import { useUser } from '@contexts/UserContext';

const provider = new GoogleAuthProvider();

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [copyPassword, setCopyPassword] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useUser();

  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';

  function register(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (password !== copyPassword) {
      setError('Пароли не совпадают!');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        setUser(user);
        setError('');
        setEmail('');
        setPassword('');
        setCopyPassword('');
        navigate(fromPage, { replace: true });
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
            setError('Некорректный email адрес.');
            break;
          case 'auth/email-already-in-use':
            setError('Этот email уже используется.');
            break;
          case 'auth/weak-password':
            setError('Пароль слишком слабый. Используйте более сложный пароль.');
            break;
          default:
            setError('Ошибка регистрации. Попробуйте еще раз.');
            break;
        }
      });
  }

  function registerWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate('/');
      })
      .catch((error) => {
        console.error('Ошибка регистрации с Google:', error);
        setError('Ошибка регистрации с Google');
      });
  }

  return (
    <div className='background-blue'>
      <hr className='hr catalog-hr' />
      <section className='register-container'>
        <form>
          <h2>Регестрация</h2>
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

          <input
            placeholder='Повторите пароль'
            value={copyPassword}
            onChange={e => setCopyPassword(e.target.value)}
            type="password"
          />

          <Link className='register-link' to='/login'>Есть аккаунт?</Link>

          {error && <p className='error-text'>{error}</p>}

          <button onClick={register} className='sign-up-button'>Регестрация</button>
          <p className='sign-up-text'>или</p>
          <button type="button" onClick={registerWithGoogle} className='sign-in-with-google'>Войти с помощью Google</button>
        </form>
      </section>
    </div>
  )
}
