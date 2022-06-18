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

  const token = localStorage.getItem('token');
  const [currentUser, setCurrentUser] = useState({ isLoggedIn: false });

  // console.log(currentUser)
  // useEffect(() => {
  //   Promise.all([api.getUserInfo(token)])
  //     .then(([userInfoObject]) => {
  //       setCurrentUser(prev => {
  //         return { ...prev, ...userInfoObject.data }
  //       })

  //     })
  //     .catch((err) => {
  //       console.log(`Невозможно загрузить информацию с сервера ${err}`);
  //     });
  // }, [])

  const tokenCheck = () => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      console.log(token)
      api.getUserInfo(token)
        .then(([userInfoObject]) => {
          setCurrentUser(prev => {
            return { ...prev, ...userInfoObject.data }
          })
          console.log(userInfoObject)
        })
        .catch(err => {
          console.log('Переданный токен некорректен.');
        });
    }
  };

  useEffect(() => {
    tokenCheck();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = ({ email, password }) => {
    console.log('1')
    api.authorize({ email, password })
      .then((data) => {
        currentUser.isLoggedIn = true;
        navigate('/');

      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/saved-movies" element={<SavedMoviePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signin" element={<Login onSubmit={handleLogin} />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
