import './FilterCheckbox.css';

export const FilterCheckbox = ({isChecked, onChange}) => {

    return (
        <label className="checkbox transition opacity">
            <input
                type="checkbox"
                className="checkbox__input"
                checked={isChecked}
                onChange={onChange}
            />
            <span className="checkbox__slider" />
        </label>
    );
}