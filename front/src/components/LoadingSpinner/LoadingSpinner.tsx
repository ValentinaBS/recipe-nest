import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => {
    return (
        <div className='spinner-position d-flex justify-content-center align-items-center'>
            <Spinner animation='border' role='status' className='spinner-size'>
                <span className='visually-hidden'>Loading...</span>
            </Spinner>
        </div>
    );
};

export default LoadingSpinner;