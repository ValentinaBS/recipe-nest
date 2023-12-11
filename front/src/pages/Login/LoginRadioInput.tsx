import React from 'react';
import { Field } from 'formik';
import LoginRadioInputProps from '../../types/loginRadioInputProps';

const LoginRadioInput: React.FC<LoginRadioInputProps> = ({ id, imageSrc, alt }) => (
    <div className="custom-checkbox">
        <Field
            type="radio"
            name="user_image"
            id={id}
            className="form-check-input d-none"
            value={imageSrc}
        />
        <label className="form-check-label" htmlFor={id}>
            <img className='rounded-circle p-1' src={imageSrc} alt={alt} />
        </label>
    </div>
);

export default LoginRadioInput;