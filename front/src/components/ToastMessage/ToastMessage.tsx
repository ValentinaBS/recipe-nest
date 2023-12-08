import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { FaBell } from "react-icons/fa";
import './ToastMessage.css';

interface ToastMessageProps {
    message: string;
    toggleToast: () => void;
}

const ToastMessage: React.FC<ToastMessageProps> = ({ message, toggleToast }) => {

    const closeToast = () => toggleToast();

    return (
        <ToastContainer
            className="p-3 mt-5 toast-container"
            position='top-end'
            style={{ zIndex: 4 }}
        >
            <Toast
                animation
                autohide
                delay={5000}
                show={true}
                onClose={closeToast}
            >
                <Toast.Header className='d-flex flex-column'>
                    <Toast.Body className='d-flex align-items-center gap-3'>
                        <FaBell className='fs-4 green-text' />
                        <p className='m-0 fs-6'>
                            {message}
                        </p>
                    </Toast.Body>
                </Toast.Header>
            </Toast>
        </ToastContainer>
    );
}

export default ToastMessage;