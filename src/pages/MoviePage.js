import { Header } from '../components/Header/Header';
import { Movies } from '../components/Movies/Movies';
import { Navigation } from '../components/Navigation/Navigation';
import { Footer } from '../components/Footer/Footer';

export const MoviePage = () => {

    return (
        <>
            <Header>
                <Navigation />
            </Header>
            <Movies />
            <Footer />
        </>
    );
}
