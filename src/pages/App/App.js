import './App.css';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from '../HomePage';
import { MoviePage } from '../MoviePage';
import { SavedMoviePage } from '../SavedMoviePage';
import { ProfilePage } from '../ProfilePage';
import { Login } from '../Login/Login';
import { Registration } from '../Registration/Registration';
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
        <Route path="/signup" element={<Registration />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
