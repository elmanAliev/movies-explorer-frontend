import './ButtonDelete.css';

export const ButtonDelete = ({ onClick, movie }) => {

    const handleClick = () => onClick(movie._id);

    
    return (
        <button onClick={handleClick} className='batton-delete transition opacity' type='button'></button>
    );
}