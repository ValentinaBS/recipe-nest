import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { UpdateUserModalProps } from '../../types/updateModal';
import LoginRadioInput from '../../pages/Login/LoginRadioInput';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const UpdateUserModal: React.FC<UpdateUserModalProps> = ({ show, onHide, onSave, title, fields }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton className='px-4'>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    enableReinitialize
                    initialValues={{
                        username: fields?.username || '',
                        user_description: fields?.user_description || '',
                        user_image: fields?.user_image || '',
                    }}
                    validationSchema={Yup.object({
                        username: Yup.string()
                            .required()
                            .max(45, 'Your username must have less than 45 characters'),
                        user_description: Yup.string()
                            .required()
                            .min(100, 'Your description must have at least 100 characters')
                            .max(500, 'Your description must have less than 500 characters'),
                        user_image: Yup.string().required()
                    })}
                    onSubmit={(values, actions) => {
                        onSave(values);
                        onHide();
                        actions.setSubmitting(false);
                    }}
                >
                    {formik => (
                        <Form className='px-3 py-2'>
                            <div className='mb-4'>
                                <label htmlFor='username' className='form-label'>Username</label>
                                <Field
                                    type='text'
                                    className='form-control'
                                    id='username'
                                    name='username'
                                />
                                <ErrorMessage name='username' component='div' className='text-danger' />
                            </div>

                            <div className='mb-4'>
                                <label htmlFor='user_description' className='form-label'>Description</label>
                                <Field
                                    as='textarea'
                                    className='form-control'
                                    id='user_description'
                                    name='user_description'
                                />
                                <ErrorMessage name='user_description' component='div' className='text-danger' />
                            </div>

                            <div className='mb-4'>
                                <label className='form-label'>User Image</label>
                                <div className='d-flex justify-content-between'>
                                    <LoginRadioInput id='user_image1' imageSrc='https://i.imgur.com/3PnQ2EZ.png' alt='Yoghurt bowl' />
                                    <LoginRadioInput id='user_image2' imageSrc='https://i.imgur.com/pW3YAYr.png' alt='Salad bowl' />
                                    <LoginRadioInput id='user_image3' imageSrc='https://i.imgur.com/iofu5Wq.png' alt='Vegan tacos' />
                                </div>
                            </div>

                            <div className='d-flex justify-content-end'>
                                <Button
                                    className='primary-btn mt-3'
                                    type='submit'
                                    disabled={formik.isSubmitting}
                                >
                                    Save Changes
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    );
};

export default UpdateUserModal;