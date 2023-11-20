import React from 'react';
import { Field } from 'formik';

interface LoginRadioInputProps {
    id: string;
    imageSrc: string;
    alt: string;
}

const LoginRadioInput: React.FC<LoginRadioInputProps> = ({ id, imageSrc, alt }) => (
    <div className="custom-checkbox">
        <Field
            type="radio"
            name="profileImg"
            id={id}
            className="form-check-input d-none"
            value={id}
        />
        <label className="form-check-label" htmlFor={id}>
            <img className='rounded-circle p-1' src={imageSrc} alt={alt} />
        </label>
    </div>
);

export default LoginRadioInput;