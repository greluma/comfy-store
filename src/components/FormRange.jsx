import { useState } from "react"
import { formatPrice } from "../utils"
import PropTypes from 'prop-types';

const FormRange = ({ label, name, size }) => {
    const step = 1000
    const maxPrice = 1000000
    const [selectedPrice, setSelectedPrice] = useState(maxPrice)

    return (
        <div className="form-control">
            <label htmlFor={name} className="label cursor-pointer">
                <span className="label-text capitalize">{label}</span>
                <span>{formatPrice(selectedPrice)}</span>
            </label>
            <input type="range" className={`range range-primary ${size}`} name={name} id={name} min={0} max={maxPrice} value={selectedPrice} step={step} onChange={(e) => {
                setSelectedPrice(Number(e.target.value))
            }} />
            <div className="w-full flex justify-between text-xs px-2 mt-2">
                <span className="font-bold text-md">0</span>
                <span className="font-bold text-md">Max : {formatPrice(maxPrice)}</span>
            </div>
        </div>
    )
}

FormRange.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.string,
};

export default FormRange