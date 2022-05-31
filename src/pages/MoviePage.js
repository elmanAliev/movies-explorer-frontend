import { Header } from '../components/Header/Header';
import { Movies } from '../components/Movies/Movies';
import { Navigation } from '../components/Navigation/Navigation';

export const MoviePage = () => {

    return (
        <>
           <Header>
                <Navigation />
            </Header>
            <Movies />
        </>
    );
}
