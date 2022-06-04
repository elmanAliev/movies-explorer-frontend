import './FilterCheckbox.css';

export const FilterCheckbox = () => {

    return (
        <label className="checkbox transition opacity">
            <input
                type="checkbox"
                className="checkbox__input"
            />
            <span className="checkbox__slider"/>
        </label>
    );
}