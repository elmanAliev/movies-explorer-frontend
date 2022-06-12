import { Header } from '../components/Header/Header';
import { MoviesSaved } from '../components/MoviesSaved/MoviesSaved';
import { Navigation } from '../components/Navigation/Navigation';
import { Footer } from '../components/Footer/Footer';

export const SavedMoviePage = () => {

    return (
        <>
            <Header>
                <Navigation />
            </Header>
            <MoviesSaved />
            <Footer />
        </>
    );
}
