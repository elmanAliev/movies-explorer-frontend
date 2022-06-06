import './App.css';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from '../HomePage';
import { MoviePage } from '../MoviePage';
import { SavedMoviePage } from '../SavedMoviePage';
import { ProfilePage } from '../ProfilePage';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/saved-movies" element={<SavedMoviePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
