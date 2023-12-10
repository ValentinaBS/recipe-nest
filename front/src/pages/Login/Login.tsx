import React, { useState, useContext } from 'react';
import LoginRadioInput from './LoginRadioInput';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ToastMessage from '../../components/ToastMessage/ToastMessage';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { AuthContext } from '../../context/authContext';
import './login.css'

const Login: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const { login, register, toastMessage, setToastMessage } = useContext(AuthContext);

    const baseSchema = {
        email: Yup.string()
            .email('Introduce a valid email')
            .required('Email is required')
            .max(45, 'Your email must have less than 45 characters'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).*$/,
                'Password must contain at least one uppercase letter, one lowercase letter, and one special character'
            )
            .max(45, 'Your password must have less than 45 characters'),
    };

    const registrationFields = {
        username: Yup.string()
            .required('Username is required')
            .max(45, 'Your username must have less than 45 characters'),
        user_description: Yup.string()
            .required('A description is required')
            .min(100, 'Your description must have at least 100 characters')
            .max(500, 'Your description must have less than 500 characters'),
        user_image: Yup.string().required('A profile image is required'),
    };

    const getValidationSchema = (isLogin: boolean) => {
        if (isLogin) {
            return Yup.object().shape({
                ...baseSchema,
            });
        } else {
            return Yup.object().shape({
                ...baseSchema,
                ...registrationFields,
            });
        }
    };

    return (
        <Formik
            initialValues={{
                username: '',
                email: '',
                password: '',
                user_description: '',
                user_image: '',
            }}
            validationSchema={getValidationSchema(isLogin)}
            onSubmit={async (values, formikBag) => {
                const { email, password } = values;

                try {
                    setIsLoading(true);

                    if (isLogin) {
                        await login({ email, password });
                    } else {
                        await register(values);
                    }
                    formikBag.resetForm();
                } catch (error) {
                    console.error('Error', error);
                } finally {
                    setIsLoading(false);
                }
            }}
        >
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <div className={'d-flex justify-content-center align-items-center login-margin mx-2 gap-5' + (isLogin ? '' : ' flex-row-reverse')}>
                    <img
                        src={isLogin ? 'https://i.imgur.com/NezeMlu.png' : 'https://i.imgur.com/5zr2YIx.png'}
                        alt='Woman holding vegetables'
                        className='d-none d-lg-block login-img'
                    />
                    {toastMessage && (
                        <ToastMessage message={toastMessage} toggleToast={() => setToastMessage('')} />
                    )}
                    <Form className='login-form'>
                        <h1 className='text-center mb-4 fs-2'>
                            {isLogin ? 'Log into your account!' : 'Sign up with us!'}
                        </h1>

                        {!isLogin &&
                            <div className='mb-4'>
                                <label htmlFor='username' className='form-label'>Username</label>
                                <Field
                                    type='text'
                                    id='username'
                                    name='username'
                                    className='form-control'
                                    placeholder='Jane123'
                                />
                                <ErrorMessage name='username' component='div' className='text-danger' />
                            </div>
                        }

                        <div className='mb-4'>
                            <label htmlFor='email' className='form-label'>Email address</label>
                            <Field
                                id='email'
                                name='email'
                                type='email'
                                className='form-control'
                                placeholder='name@email.com'
                            />
                            <ErrorMessage name='email' component='div' className='text-danger' />
                        </div>

                        <div className='mb-4'>
                            <label htmlFor='password' className='form-label'>Password</label>
                            <div className='input-group'>
                                <Field
                                    id='password'
                                    name='password'
                                    className='form-control'
                                    type={showPassword ? 'text' : 'password'}
                                />
                                <button
                                    type='button'
                                    className={`btn ${showPassword ? 'secondary-btn' : 'primary-btn'}`}
                                    onClick={() => setShowPassword(prevState => !prevState)}
                                >
                                    {showPassword ? <IoEyeOff /> : <IoEye />}
                                </button>
                            </div>
                            <ErrorMessage name='password' component='div' className='text-danger' />
                        </div>

                        {!isLogin &&
                            <div className='mb-4'>
                                <label htmlFor='user_description' className='form-label'>Profile Description</label>
                                <Field
                                    as='textarea'
                                    id='user_description'
                                    name='user_description'
                                    className='form-control'
                                    placeholder='My name is Jane and I love vegan food because...'
                                />
                                <ErrorMessage name='user_description' component='div' className='text-danger' />
                            </div>
                        }

                        {!isLogin &&
                            <fieldset>
                                <legend className='fs-6'>
                                    Profile Picture
                                </legend>
                                <div className='d-flex justify-content-between'>
                                    <LoginRadioInput id='user_image1' imageSrc='https://i.imgur.com/3PnQ2EZ.png' alt='Yoghurt bowl' />
                                    <LoginRadioInput id='user_image2' imageSrc='https://i.imgur.com/pW3YAYr.png' alt='Salad bowl' />
                                    <LoginRadioInput id='user_image3' imageSrc='https://i.imgur.com/iofu5Wq.png' alt='Vegan tacos' />
                                </div>
                                <ErrorMessage name='user_image' component='div' className='text-danger' />
                            </fieldset>
                        }

                        <button type='submit' className='btn primary-btn w-100 mt-4'>
                            {isLogin ? 'Log in' : 'Sign up'}
                        </button>

                        <div className='d-flex flex-column mt-4 align-items-center'>
                            <p className='text-secondary mb-2'>
                                {isLogin ? `Don't have an account?` : 'Already have an account?'}
                            </p>
                            <button
                                type='button'
                                className='login-link bg-white border-0'
                                onClick={() => setIsLogin(!isLogin)}
                            >
                                {isLogin ? 'Sign Up' : 'Log In'}
                            </button>
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default Login