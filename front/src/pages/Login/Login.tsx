import React, { useState } from 'react'
import { MagicMotion } from 'react-magic-motion';
import './login.css'

const Login: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleLogin = () => {
        setIsLogin(!isLogin);
    };

    return (
        <MagicMotion>
            <div className={'d-flex justify-content-center align-items-center login-margin mx-2 gap-5' + (isLogin ? '' : ' flex-row-reverse')}>
                <img 
                    src={isLogin ? 'https://i.imgur.com/NezeMlu.png' : 'https://i.imgur.com/5zr2YIx.png'}
                    alt='Woman holding vegetables'
                    className='d-none d-lg-block login-img' 
                />
                <form className='login-form'>
                    <h1 className='text-center mb-4 fs-2'>
                        {isLogin ? 'Log into your account!' : 'Sign up with us!'}
                    </h1>

                    {!isLogin &&
                        <div className='mb-4'>
                            <label htmlFor='usernameLogin' className='form-label'>Username</label>
                            <input id='usernameLogin' className='form-control' placeholder='Jane123' />
                        </div>
                    }

                    <div className='mb-4'>
                        <label htmlFor='emailLogin' className='form-label'>Email address</label>
                        <input id='emailLogin' type='email' className='form-control' placeholder='name@email.com' />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor='passwordLogin' className='form-label'>Password</label>
                        <input id='passwordLogin' className='form-control' type='password' />
                    </div>

                    {!isLogin &&
                    <fieldset>
                        <legend className='fs-6'>
                            Profile Picture
                        </legend>
                        <div className='d-flex justify-content-between'>
                            <div className="custom-checkbox">
                                <input className="form-check-input d-none" type="radio" name="profileImg" id="profileImg1" />
                                <label className="form-check-label" htmlFor="profileImg1">
                                    <img className='rounded-circle p-1' src="https://i.imgur.com/3PnQ2EZ.png" alt="Yoghurt bowl" />
                                </label>
                            </div>
                            <div className="custom-checkbox">
                                <input className="form-check-input d-none" type="radio" name="profileImg" id="profileImg2" />
                                <label className="form-check-label" htmlFor="profileImg2">
                                    <img className='rounded-circle p-1' src="https://i.imgur.com/pW3YAYr.png" alt="Salad bowl" />
                                </label>
                            </div>
                            <div className="custom-checkbox">
                                <input className="form-check-input d-none" type="radio" name="profileImg" id="profileImg3" />
                                <label className="form-check-label" htmlFor="profileImg3">
                                    <img className='rounded-circle p-1' src="https://i.imgur.com/iofu5Wq.png" alt="Vegan tacos" />
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    }

                    <button type='submit' className='btn primary-btn w-100 mt-4'>
                        {isLogin ? 'Log in' : 'Sign up'}
                    </button>

                    <div className='d-flex flex-column mt-4 align-items-center'>
                        <p className='text-secondary mb-2'>
                            {isLogin ? "Don't have an account?" : 'Already have an account?'}
                        </p>
                        <button 
                            type='button'
                            className='login-link bg-white border-0'
                            onClick={handleLogin}
                        >
                            {isLogin ? 'Sign Up' : 'Log In'}
                        </button>
                    </div>
                </form>
            </div>
        </MagicMotion>
    )
}

export default Login