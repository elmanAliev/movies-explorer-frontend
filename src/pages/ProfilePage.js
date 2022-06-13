import { Profile } from '../components/Profile/Profile';
import {Header} from './../components/Header/Header'
import {Navigation} from './../components/Navigation/Navigation'

export const ProfilePage = () => {

    return (
        <>
           <Header>
               <Navigation />
           </Header>
           <Profile />
        </>
    );
}
