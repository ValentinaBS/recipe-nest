import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface ConfirmationModalProps {
    message: string;
    show: boolean;
    handleClose: () => void;
    handleSave: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ message, show, handleClose, handleSave }) => {

    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header className='border-0 px-4 pt-4'>
                    <Modal.Title>Attention!</Modal.Title>
                </Modal.Header>
                <Modal.Body className='px-4 py-0'>
                    {message}
                    {message == 'Are you sure you want to delete this recipe?' && 
                        <p>(You won't be able to revert this action)</p>
                    }
                </Modal.Body>
                <Modal.Footer className='border-0 px-3 mx-auto mx-md-0 '>
                    <Button className='secondary-btn' onClick={handleClose}>
                        Close
                    </Button>
                    <Button className='primary-btn' onClick={handleSave}>
                        Yes, log out
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ConfirmationModal;