import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';
import axios from 'axios';
import { BiSolidComment, BiSolidSend } from 'react-icons/bi';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface CommentsProps {
    userId: number | undefined;
    recipeId: number;
}

interface Comment {
    comment_id: number;
    comment_text: string;
    comment_likes: number;
    comment_published_time: string;
    recipe_id: number;
    user_id: number;
    comment_active: number;
    user_image: string;
    username: string;
}

const Comments: React.FC<CommentsProps> = ({ userId, recipeId }) => {
    const [comments, setComments] = useState<Comment[]>([]);
    const { currentUser } = useContext(AuthContext)

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/comments/search/${recipeId}`);
            setComments(response.data);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    const validationSchema = Yup.object().shape({
        comment_text: Yup.string()
            .required("You can't send an empty comment")
            .max(500, 'Your comment must have less than 500 characters'),
    });

    const handleSubmit = async (values: any, actions: any) => {
        const newComment = {
            comment_text: values.comment_text,
            comment_likes: 0,
            comment_published_time: new Date().toISOString().slice(0, 19).replace('T', ' '),
            recipe_id: recipeId,
            user_id: userId,
            comment_active: 1
        };

        try {
            await axios.post(`http://localhost:3000/api/comments`, newComment);

            // Reset the form after successful submission
            actions.resetForm();
            location.reload()
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };

    return (
        <div className='py-4 card-background w-100 mx-5'>
            <div className='d-flex align-items-center gap-3'>
                <BiSolidComment className='fs-3 mb-2' />
                <h2 className='fs-3'>Comments</h2>
            </div>

            {comments.length === 0 ? (
                <p className='my-5 fs-5 text-center'>
                    No comments yet. Be the first to comment!
                </p>
            ) : (comments.map((comment) => (
                <div key={comment.comment_id} className='d-flex gap-3 my-3'>
                    <img className='rounded-circle p-1 comments-img' src={comment.user_image} alt={`Profile picture from ${comment.username}`} />
                    <div>
                        <p className='mb-0 fw-bold'>{comment.username}</p>
                        <p className='mb-2 text-secondary'>
                            {new Date(comment.comment_published_time).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                            }) +
                                ' at ' +
                                new Date(comment.comment_published_time).toLocaleTimeString('en-US', {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    hour12: true,
                                })}
                        </p>
                        <p>{comment.comment_text}</p>
                    </div>
                </div>
            )
            ))}

            <Formik
                initialValues={{
                    comment_text: ''
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className='d-flex align-items-center gap-2'>
                            <img className='rounded-circle p-1 comments-img' src={currentUser?.user_image} alt={`Profile picture from ${currentUser?.username}`} />
                            <Field
                                className='form-control'
                                placeholder='I liked the part where...'
                                type="text"
                                name="comment_text"
                                as="input"
                            />
                            <button className='btn primary-btn px-2' type='submit' disabled={isSubmitting}>
                                <BiSolidSend className='fs-5' />
                            </button>
                        </div>
                        <ErrorMessage name="comment_text" component="div" className="text-danger" />
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Comments