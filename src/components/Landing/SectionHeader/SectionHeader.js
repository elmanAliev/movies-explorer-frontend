import './SectionHeader.css';

export const SectionHeader = ({children}) => {

    return (
        <h2 className='section-header'>
            {children}
        </h2>
    );
}