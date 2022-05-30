import './SectionTitle.css';

export const SectionTitle = ({children}) => {

    return (
        <h2 className='section-title'>
            {children}
        </h2>
    );
}