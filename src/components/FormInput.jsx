import PropTypes from 'prop-types';

const FormInput = ({ label, name, type, defaultValue, size }) => {
    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text capitalize">{label}</span>
            </label>
            <input type={type} name={name} className={`${size} input input-bordered lowercase`} defaultValue={defaultValue} required />
        </div>
    )
}

FormInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    defaultValue: PropTypes.string,
    size: PropTypes.string,
};

export default FormInput;