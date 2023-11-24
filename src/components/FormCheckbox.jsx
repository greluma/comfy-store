import PropTypes from 'prop-types';


const FormCheckbox = ({ label, name, defaultValue, size }) => {
    return (
        <div className="form-control items-center">
            <label htmlFor={name} className="cursor-pointer">
                <span className="label-text capitalize">{label}</span>

            </label>
            <input type="checkbox" name={name} id={name} defaultChecked={defaultValue} className={`mt-1 checkbox checkbox-primary ${size}`} />
        </div>
    )
}

FormCheckbox.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    defaultValue: PropTypes.string,
    size: PropTypes.string,
};

export default FormCheckbox