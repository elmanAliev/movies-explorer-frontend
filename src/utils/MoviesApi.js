import { MOVIES_URL } from './constants';

export const getAllMovies = async () => {
    const res = await fetch(`${MOVIES_URL}/beatfilm-movies`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    if (res.ok) return res.json();
    return Promise.reject(res.status);
}
