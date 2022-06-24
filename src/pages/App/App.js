import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { HomePage } from '../HomePage';
import { MoviePage } from '../MoviePage';
import { SavedMoviePage } from '../SavedMoviePage';
import { ProfilePage } from '../ProfilePage';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';
import { ProtectedRoute } from '../../components/ProtectedRoute'
import Loader from '../../components/Loader/Loader'
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useEffect, useState } from 'react';
import api from '../../utils/MainApi';

function App() {

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({ isLoggedIn: false });
  const [isLoading, setIsLoading] = useState(false);

  const [errRegister, setErrRegister] = useState('');
  const [errLogin, setErrLogin] = useState('');


  useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');

      api.getUserInfo(token)
        .then(user => setCurrentUser(prev => ({ ...prev, ...user.data, isLoggedIn: true })))
        .catch(err => console.log(`'Переданный токен некорректен.' ${err}`))
        .finally(() => setIsLoading(true))
    } else {
      setIsLoading(true)
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

  if (!isLoading)
    return (
      <div className='app__loader'>
        <Loader />
      </div>
    );

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<Login onSubmit={handleLogin} error={errLogin} />} />
          <Route path="/signup" element={<Register onSubmit={handleRegister} error={errRegister} />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute>
                <MoviePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute>
                <SavedMoviePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
