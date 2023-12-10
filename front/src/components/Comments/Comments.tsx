import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import axios from 'axios';
import { BiSolidComment, BiSolidSend } from 'react-icons/bi';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ToastMessage from '../ToastMessage/ToastMessage';

interface CommentsProps {
    userId: number | undefined;
    recipeId: number;
}

const Comments: React.FC<CommentsProps> = ({ userId, recipeId }) => {

    const { toastMessage, setToastMessage } = useContext(AuthContext);

    const validationSchema = Yup.object().shape({
        comment_text: Yup.string()
            .required("You can't send an empty comment")
            .max(500, 'Your comment must have less than 500 characters'),
    });

    const handleSubmit = async (values: any, actions: any) => {
        const newComment = {
            comment_text: values.comment_text,
            comment_likes: 0,
            comment_published_time: new Date().toISOString(),
            recipe_id: recipeId,
            user_id: userId,
            comment_active: 1
        };

        try {
            await axios.post(`http://localhost:3000/api/comments`, newComment);

            // Reset the form after successful submission
            actions.resetForm();
            setToastMessage('Your comment has been submitted!')
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };

    return (
        <div className='py-4 card-background w-100 mx-5'>
            {toastMessage && (
                <ToastMessage message={toastMessage} toggleToast={() => setToastMessage('')} />
            )}
            <div className='d-flex align-items-center gap-3'>
                <BiSolidComment className='fs-3 mb-2' />
                <h2 className='fs-3'>Comments</h2>
            </div>

            <div className='d-flex gap-3 my-3'>
                <img className='rounded-circle p-1 comments-img' src="https://i.imgur.com/3PnQ2EZ.png" alt="Profile picture" />
                <div>
                    <p className='mb-0 fw-bold'>JaneD123</p>
                    <p className='mb-2 text-secondary'>a few seconds ago</p>
                    <p>Such a creative recipe!</p>
                </div>
            </div>

            <Formik
                initialValues={{
                    comment_text: ''
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className='d-flex align-items-center gap-2'>
                        <Field
                            className='form-control'
                            placeholder='I liked the part where...'
                            type="text"
                            name="comment_text"
                            as="input"
                        />
                        <ErrorMessage name="comment_text" component="div" className="text-danger" />
                        <button className='btn primary-btn px-2' type='submit' disabled={isSubmitting}>
                            <BiSolidSend className='fs-5' />
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Comments