import PropTypes from 'prop-types';

const FormSelect = ({ label, name, list, defaultValue, size }) => {
    return (
        <div className="form-control">
            <label htmlFor={name} className="label">
                <span className="label-text capitalize">{label}</span>
            </label>
            <select name={name} id={name} defaultValue={defaultValue} className={`select capitalize select-bordered ${size}`}>
                {list.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
};

FormSelect.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    defaultValue: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
};

export default FormSelect;
