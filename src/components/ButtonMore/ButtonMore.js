import './ButtonMore.css';

export const ButtonMore = ({onClick}) => {

    return (
        <div className='button-more'>
            <button onClick={onClick} className='button-more__btn opacity transition' type='button'>Ещё</button>
        </div>
    );
}