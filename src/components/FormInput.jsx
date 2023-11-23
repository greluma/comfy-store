import PropTypes from 'prop-types';

const FormInput = ({ label, name, type, defaultValue }) => {
    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text capitalize">{label}</span>
            </label>
            <input type={type} name={name} className="input input-bordered lowercase" defaultValue={defaultValue} required />
        </div>
    )
}

FormInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    defaultValue: PropTypes.string,
};

export default FormInput;