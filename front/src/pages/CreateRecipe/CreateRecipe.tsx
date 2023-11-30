import React, { useState } from 'react';
import axios from 'axios';
import FileUploadFormValues from '../../types/fileUpload';
import { Button, Col, Row, Modal, ProgressBar } from 'react-bootstrap';
import FormBootstrap from 'react-bootstrap/Form';
import { Formik, Form, Field, ErrorMessage, FieldProps } from 'formik';
import * as Yup from 'yup';
import { MdOutlineAddCircle } from 'react-icons/md';
import { Ingredients } from '../../components/Ingredients/Ingredients';
import './createRecipe.css';

const CreateRecipe: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<string | ArrayBuffer | null>('https://i.imgur.com/GEL53cL.png');
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedFile(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const validationSchema = Yup.object().shape({
        recipe_image: Yup.mixed().required('Image is required'),
        title: Yup.string()
            .required('Title is required')
            .max(45, 'The title must have less than 45 characters'),
        serves: Yup.number()
            .required('Serves is required')
            .positive('Servings must be a positive number')
            .integer('Servings must be an integer')
            .moreThan(0, 'Servings must be greater than 0'),
        cookTime: Yup.string()
            .required('Cook Time is required')
            .max(20, 'The cook time must have less than 20 characters'),
        ingredients: Yup.array().min(1, 'At least one ingredient is required'),
        instructions: Yup.string()
            .required('Instructions are required')
            .min(150, 'Instructions must have at least 150 characters')
            .max(1000, 'The instructions must have less than 1000 characters'),
        occasion: Yup.string().notOneOf(['- Select an occasion -'], 'Occasion is required'),
        type: Yup.string().required('Type is required'),
        newIngredientQuantity: Yup.number()
            .typeError('Please enter a valid numeric value')
            .positive('Quantity must be a positive number'),
        newIngredientUnit: Yup.string(),
        newIngredientText: Yup.string()
            .max(45, 'The ingedient must have less than 45 characters'),
    });

    return (
        <Formik
            initialValues={{
                recipe_image: undefined,
                title: '',
                serves: '',
                cookTime: '',
                ingredients: [],
                instructions: '',
                occasion: '- Select an occasion -',
                type: '',
                newIngredientQuantity: 0,
                newIngredientText: '',
                newIngredientUnit: ''
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, formikBag) => {
                const { newIngredientQuantity, newIngredientText, newIngredientUnit, ingredients, ...recipeValues } = values;
                setShowModal(true)

                const api_key = "128255215253675";
                const cloud_name = "dx1etk0x2";
                const upload_preset = "f5vfvkh2";

                const data = new FormData();
                if (values.recipe_image) {
                    data.append("file", values.recipe_image);
                }
                data.append("api_key", api_key);
                data.append("upload_preset", upload_preset);

                try {
                    const cloudinaryResponse = await axios.post(
                        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
                        data,
                        {
                            headers: { "Content-Type": "multipart/form-data" },
                            onUploadProgress: (progressEvent) => {
                                if(progressEvent.total) {
                                    const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                                    setUploadProgress(progress);
                                }
                            }
                        }
                    );

                    console.log("Upload successful:", cloudinaryResponse.data);
                    console.log("Clean values:", recipeValues);

                    recipeValues.recipe_image = cloudinaryResponse.data.secure_url;
                    setModalMessage('Your recipe has been uploaded successfully!');
                    formikBag.resetForm();
                    setSelectedFile('https://i.imgur.com/GEL53cL.png')
                } catch (error) {
                    console.error("Error uploading image:", error);
                    setModalMessage('There was an error trying to upload your recipe. Try again!');
                }
            }}
        >
            <Form className='my-5 mx-4 mx-md-auto create-form'>
                <Modal 
                    show={showModal} 
                    onHide={() => setShowModal(false)}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Body className='text-center py-5 px-5'>
                        <ProgressBar animated now={uploadProgress} label={`${uploadProgress}%`} />

                        {modalMessage &&
                        <p className='mt-3'>{modalMessage}</p>}

                        {modalMessage &&                      
                        <Button className='secondary-btn d-block mx-auto mt-4' onClick={() => setShowModal(false)}>
                            Close
                        </Button>}
                    </Modal.Body>
                </Modal>
                <FormBootstrap.Group className='mb-4'>
                    <FormBootstrap.Label className='d-flex flex-column row-gap-3 justify-content-center align-items-center' role='button' htmlFor='recipe_image'>
                        {selectedFile && (
                            <img
                                src={selectedFile as string}
                                alt='Uploaded'
                                className='uploaded-image'
                            />
                        )}
                        Show others your finished dish!
                        
                    </FormBootstrap.Label>

                    <Field
                        type='file'
                        component={({ form }: FieldProps<FileUploadFormValues['file']>) => (
                            <>
                                <input
                                    type="file"
                                    id='recipe_image'
                                    accept='image/*'
                                    name='recipe_image'
                                    className='d-none'
                                    onChange={(e) => {
                                        const file = e.currentTarget.files ? e.currentTarget.files[0] : null;
                                        form.setFieldValue('recipe_image', file);
                                        handleFileChange(e)
                                    }}
                                />
                            </>
                        )}
                    />
                    <ErrorMessage name='recipe_image' component='div' className='text-danger' />
                </FormBootstrap.Group>

                <FormBootstrap.Group className='mb-4' controlId='title'>
                    <FormBootstrap.Label>Title</FormBootstrap.Label>
                    <Field type='text' name='title' className='form-control' placeholder='Traditional Tomato Soup...' />
                    <ErrorMessage name='title' component='div' className='text-danger' />
                </FormBootstrap.Group>

                <Row className='mb-4'>
                    <FormBootstrap.Group as={Col} controlId='serves'>
                        <FormBootstrap.Label>Serves</FormBootstrap.Label>
                        <Field type='number' min='1' name='serves' className='form-control' placeholder='3' />
                        <ErrorMessage name='serves' component='div' className='text-danger' />
                    </FormBootstrap.Group>

                    <FormBootstrap.Group as={Col} controlId='cookTime'>
                        <FormBootstrap.Label>Cook Time</FormBootstrap.Label>
                        <Field type='text' name='cookTime' className='form-control' placeholder='2hr 30mins' />
                        <ErrorMessage name='cookTime' component='div' className='text-danger' />
                    </FormBootstrap.Group>
                </Row>

                <FormBootstrap.Group className='mb-4' controlId='ingredients'>
                    <FormBootstrap.Label>Ingredients</FormBootstrap.Label>
                    <Ingredients />
                    <ErrorMessage name='ingredients' component='div' className='text-danger' />
                </FormBootstrap.Group>

                <FormBootstrap.Group className='mb-4' controlId='instructions'>
                    <FormBootstrap.Label>Instructions</FormBootstrap.Label>
                    <Field as='textarea' name='instructions' rows={3} className='form-control' placeholder='Step 1: Preheat the oven...' />
                    <ErrorMessage name='instructions' component='div' className='text-danger' />
                </FormBootstrap.Group>

                <FormBootstrap.Group className='mb-4' controlId='occasion'>
                    <FormBootstrap.Label>Occasion</FormBootstrap.Label>
                    <Field as='select' name='occasion' className='form-select'>
                        <option disabled>- Select an occasion -</option>
                        <option value='breakfast'>Breakfast</option>
                        <option value='lunch'>Lunch</option>
                        <option value='brunch'>Brunch</option>
                        <option value='tea time'>Tea Time</option>
                        <option value='dinner'>Dinner</option>
                        <option value='appetizers'>Appetizers</option>
                    </Field>
                    <ErrorMessage name='occasion' component='div' className='text-danger' />
                </FormBootstrap.Group>

                <FormBootstrap.Group className='mb-5' controlId='type'>
                    <FormBootstrap.Label className='w-100'>Type</FormBootstrap.Label>
                    <Field
                        name='type'
                        type='radio'
                        value='Vegan'
                        id='radioVegan'
                        label='Vegan'
                        inline
                        as={FormBootstrap.Check}
                    />
                    <Field
                        name='type'
                        type='radio'
                        value='Vegetarian'
                        id='radioVegetarian'
                        label='Vegetarian'
                        inline
                        as={FormBootstrap.Check}
                    />
                    <ErrorMessage name='type' component='div' className='text-danger' />
                </FormBootstrap.Group>

                <div className='d-flex justify-content-center'>
                    <Button className='primary-btn d-flex align-items-center column-gap-2 py-2' type='submit'>
                        <MdOutlineAddCircle className='fs-5' />
                        Create a New Recipe!
                    </Button>
                </div>
            </Form>
        </Formik>
    );
};

export default CreateRecipe;
