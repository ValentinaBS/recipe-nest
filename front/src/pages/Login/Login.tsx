import React, { useState } from 'react'
import LoginRadioInput from './LoginRadioInput';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './login.css'

const Login: React.FC = () => {
    const [isLoginSignUp, setIsLoginSignUp] = useState(true);

    const handleLoginSignUp = () => {
        setIsLoginSignUp(!isLoginSignUp);
    };

    const validationSchema = Yup.object().shape({
        emailLogin: Yup.string()
            .email('Introduce a valid email')
            .required('Email is required')
            .max(45, 'Your email must have less than 45 characters'),
        passwordLogin: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).*$/,
                'Password must contain at least one uppercase letter, one lowercase letter, and one special character'
            )
            .max(45, 'Your password must have less than 45 characters'),
        usernameLogin: Yup.string()
            .required('Username is required')
            .max(45, 'Your username must have less than 45 characters'),
        profileDescript: Yup.string()
            .required('A description is required')
            .min(100, 'Your description must have at least 100 characters')
            .max(500, 'Your description must have less than 500 characters'),
        profileImg: Yup.string().required('A profile image is required'),
    });

    return (
        <Formik
            initialValues={{
                usernameLogin: '',
                emailLogin: '',
                passwordLogin: '',
                profileDescript: '',
                profileImg: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            <div className={'d-flex justify-content-center align-items-center login-margin mx-2 gap-5' + (isLoginSignUp ? '' : ' flex-row-reverse')}>
                <img
                    src={isLoginSignUp ? 'https://i.imgur.com/NezeMlu.png' : 'https://i.imgur.com/5zr2YIx.png'}
                    alt='Woman holding vegetables'
                    className='d-none d-lg-block login-img'
                />
                <Form className='login-form'>
                    <h1 className='text-center mb-4 fs-2'>
                        {isLoginSignUp ? 'Log into your account!' : 'Sign up with us!'}
                    </h1>

                    {!isLoginSignUp &&
                        <div className='mb-4'>
                            <label htmlFor='usernameLogin' className='form-label'>Username</label>
                            <Field
                                type='text'
                                id='usernameLogin'
                                name='usernameLogin'
                                className='form-control'
                                placeholder='Jane123'
                            />
                            <ErrorMessage name='usernameLogin' component='div' className='text-danger' />
                        </div>
                    }

                    <div className='mb-4'>
                        <label htmlFor='emailLogin' className='form-label'>Email address</label>
                        <Field
                            id='emailLogin'
                            name='emailLogin'
                            type='email'
                            className='form-control'
                            placeholder='name@email.com'
                        />
                        <ErrorMessage name='emailLogin' component='div' className='text-danger' />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor='passwordLogin' className='form-label'>Password</label>
                        <Field
                            id='passwordLogin'
                            name='passwordLogin'
                            className='form-control'
                            type='password'
                        />
                        <ErrorMessage name='passwordLogin' component='div' className='text-danger' />
                    </div>

                    {!isLoginSignUp &&
                        <div className='mb-4'>
                            <label htmlFor='profileDescript' className='form-label'>Profile Description</label>
                            <Field
                                as='textarea'
                                id='profileDescript'
                                name='profileDescript'
                                className='form-control'
                                placeholder='My name is Jane and I love vegan food because...'
                            />
                            <ErrorMessage name='profileDescript' component='div' className='text-danger' />
                        </div>
                    }

                    {!isLoginSignUp &&
                        <fieldset>
                            <legend className='fs-6'>
                                Profile Picture
                            </legend>
                            <div className='d-flex justify-content-between'>
                                <LoginRadioInput id="profileImg1" imageSrc="https://i.imgur.com/3PnQ2EZ.png" alt="Yoghurt bowl" />
                                <LoginRadioInput id="profileImg2" imageSrc="https://i.imgur.com/pW3YAYr.png" alt="Salad bowl" />
                                <LoginRadioInput id="profileImg3" imageSrc="https://i.imgur.com/iofu5Wq.png" alt="Vegan tacos" />
                            </div>
                            <ErrorMessage name='profileImg' component='div' className='text-danger' />
                        </fieldset>
                    }

                    <button type='submit' className='btn primary-btn w-100 mt-4'>
                        {isLoginSignUp ? 'Log in' : 'Sign up'}
                    </button>

                    <div className='d-flex flex-column mt-4 align-items-center'>
                        <p className='text-secondary mb-2'>
                            {isLoginSignUp ? "Don't have an account?" : 'Already have an account?'}
                        </p>
                        <button
                            type='button'
                            className='login-link bg-white border-0'
                            onClick={handleLoginSignUp}
                        >
                            {isLoginSignUp ? 'Sign Up' : 'Log In'}
                        </button>
                    </div>
                </Form>
            </div>
        </Formik>
    )
}

export default Login