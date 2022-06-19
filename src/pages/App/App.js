import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { HomePage } from '../HomePage';
import { MoviePage } from '../MoviePage';
import { SavedMoviePage } from '../SavedMoviePage';
import { ProfilePage } from '../ProfilePage';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useEffect, useState } from 'react';
import api from '../../utils/MainApi';

function App() {

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({ isLoggedIn: false });

  const [errRegister, setErrRegister] = useState('');
  const [errLogin, setErrLogin] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      api.getUserInfo(token)
        .then((userInfoObject) => {
          currentUser.isLoggedIn = true;
          setCurrentUser(prev => {
            return { ...prev, ...userInfoObject.data }
          })
        })
        .catch(err => {
          console.log(`'Переданный токен некорректен.' ${err}`);
        });
    }
  }, [currentUser.isLoggedIn]);

  const handleLogin = (email, password) => {
    api.authorize({ email, password })
      .then((data) => {
        localStorage.setItem('token', data.token);
        currentUser.isLoggedIn = true;
        navigate('/movies');
        setErrLogin('');
      })
      .catch((err) => {
        console.log(err);
        setErrLogin('Некорректные данные');
      })
  }

  const handleRegister = (name, email, password) => {
    api.register({ name, email, password })
      .then((res) => {
        handleLogin(email, password);
        setErrRegister('');
      })
      .catch((err) => {
        console.log(err);
        setErrRegister('Некорректные данные');
      })
  }

  const handleLogout = () => {
    localStorage.removeItem('filteredMovies');
    localStorage.removeItem('token');
    localStorage.removeItem('searchString');
    localStorage.removeItem('isSwitchOn');
    setCurrentUser({ name: '', email: '', isLoggedIn: false });
    navigate('/');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/saved-movies" element={<SavedMoviePage />} />
          <Route path="/profile" element={<ProfilePage onLogout={handleLogout} />} />
          <Route path="/signin" element={<Login onSubmit={handleLogin} error={errLogin} />} />
          <Route path="/signup" element={<Register onSubmit={handleRegister} error={errRegister} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
