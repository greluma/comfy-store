import PropTypes from 'prop-types';
import { useNavigation } from 'react-router-dom';


const SubmitBtn = ({ text }) => {
    const navigation = useNavigation();
    console.log(navigation);
    const isSubmitting = navigation.state === 'submitting';
    return (
        <button className='btn btn-primary btn-block uppercase' type='submit' disabled={isSubmitting}>
            {isSubmitting ? <>
                <span className='loading loading-spinner'></span>
                sending...
            </> : text || 'submit'}
        </button>
    )
}

SubmitBtn.propTypes = {
    text: PropTypes.string,
};

export default SubmitBtn