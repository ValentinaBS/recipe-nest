import React, { useState, useContext } from 'react';
import { AuthContext } from "../../context/authContext";
import axios from 'axios';
import FileUploadFormValues from '../../types/fileUpload';
import { Button, Col, Row, Modal, ProgressBar } from 'react-bootstrap';
import FormBootstrap from 'react-bootstrap/Form';
import { Formik, Form, Field, ErrorMessage, FieldProps } from 'formik';
import * as Yup from 'yup';
import { MdOutlineAddCircle } from 'react-icons/md';
import { Ingredients } from '../../components/Ingredients/Ingredients';
import { Ingredient } from '../../types/ingredient';
import './createRecipe.css';

const CreateRecipe: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<string | ArrayBuffer | null>('https://i.imgur.com/GEL53cL.png');
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [uploadProgress, setUploadProgress] = useState(0);
    const { currentUser } = useContext(AuthContext);

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
        recipe_title: Yup.string()
            .required('Title is required')
            .max(45, 'The title must have less than 45 characters'),
        recipe_portions: Yup.number()
            .required('Serves is required')
            .positive('Servings must be a positive number')
            .integer('Servings must be an integer')
            .moreThan(0, 'Servings must be greater than 0'),
        recipe_cooktime: Yup.string()
            .required('Cook Time is required')
            .max(20, 'The cook time must have less than 20 characters'),
        ingredients: Yup.array().min(1, 'At least one ingredient is required'),
        recipe_instructions: Yup.string()
            .required('Instructions are required')
            .min(150, 'Instructions must have at least 150 characters')
            .max(1500, 'The instructions must have less than 1500 characters'),
        recipe_category_occasion: Yup.string().notOneOf(['- Select an occasion -'], 'Occasion is required'),
        recipe_category_type: Yup.string().required('Type is required'),
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
                recipe_title: '',
                recipe_portions: '',
                recipe_cooktime: '',
                recipe_ingredients: [],
                recipe_instructions: '',
                recipe_category_occasion: '- Select an occasion -',
                recipe_category_type: '',
                recipe_likes: 0,
                recipe_published_time: new Date().toISOString().split('T')[0],
                user_id: currentUser?.user_id,
                recipe_active: true,
                newIngredientQuantity: 0,
                newIngredientText: '',
                newIngredientUnit: '',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, formikBag) => {
                // Destructuring extra properties made for validation only
                const { newIngredientQuantity, newIngredientText, newIngredientUnit, recipe_ingredients, ...recipeValues } = values;

                const ingredientsArray = (recipe_ingredients as Ingredient[]).map((ingredient) => ingredient.text);

                const updatedRecipeValues = {
                    ...recipeValues,
                    recipe_ingredients: ingredientsArray,
                };
                
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
                                if (progressEvent.total) {
                                    const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                                    setUploadProgress(progress);
                                }
                            }
                        }
                    );

                    recipeValues.recipe_image = cloudinaryResponse.data.secure_url;

                    const submitRecipe = async () => {
                        try {
                            const response = await axios.post('http://localhost:3000/api/recipes', updatedRecipeValues);

                            console.log('Your recipe has been uploaded successfully!', response.data);
                            setModalMessage('Your recipe has been uploaded successfully!');
                            
                            // Reset form & image values
                            formikBag.resetForm();
                            setSelectedFile('https://i.imgur.com/GEL53cL.png')
                        } catch (error) {
                            console.error('Error creating the recipe:', error);
                        }
                    };

                    submitRecipe();

                    console.log("Upload successful:", cloudinaryResponse.data);
                    console.log("Clean values:", updatedRecipeValues);

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
                    <Modal.Body className='text-center pb-4 pt-5 px-5'>
                        <ProgressBar animated now={uploadProgress} label={`${uploadProgress}%`} />
                        {!modalMessage &&
                            <p className='mt-3'>Loading...</p>}

                        {modalMessage &&
                            <p className='mt-3'>{modalMessage}</p>}

                        {modalMessage &&
                            <Button className='secondary-btn d-block mx-auto mt-4 mb-1' onClick={() => setShowModal(false)}>
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
                    <Field type='text' name='recipe_title' className='form-control' placeholder='Traditional Tomato Soup...' />
                    <ErrorMessage name='recipe_title' component='div' className='text-danger' />
                </FormBootstrap.Group>

                <Row className='mb-4'>
                    <FormBootstrap.Group as={Col} controlId='serves'>
                        <FormBootstrap.Label>Serves</FormBootstrap.Label>
                        <Field type='number' min='1' name='recipe_portions' className='form-control' placeholder='3' />
                        <ErrorMessage name='recipe_portions' component='div' className='text-danger' />
                    </FormBootstrap.Group>

                    <FormBootstrap.Group as={Col} controlId='cookTime'>
                        <FormBootstrap.Label>Cook Time</FormBootstrap.Label>
                        <Field type='text' name='recipe_cooktime' className='form-control' placeholder='2hr 30mins' />
                        <ErrorMessage name='recipe_cooktime' component='div' className='text-danger' />
                    </FormBootstrap.Group>
                </Row>

                <FormBootstrap.Group className='mb-4' controlId='recipe_ingredients'>
                    <FormBootstrap.Label>Ingredients</FormBootstrap.Label>
                    <Ingredients />
                    <ErrorMessage name='recipe_ingredients' component='div' className='text-danger' />
                </FormBootstrap.Group>

                <FormBootstrap.Group className='mb-4' controlId='instructions'>
                    <FormBootstrap.Label>Instructions</FormBootstrap.Label>
                    <Field as='textarea' name='recipe_instructions' rows={3} className='form-control' placeholder='Step 1: Preheat the oven...' />
                    <ErrorMessage name='recipe_instructions' component='div' className='text-danger' />
                </FormBootstrap.Group>

                <FormBootstrap.Group className='mb-4' controlId='occasion'>
                    <FormBootstrap.Label>Occasion</FormBootstrap.Label>
                    <Field as='select' name='recipe_category_occasion' className='form-select'>
                        <option disabled>- Select an occasion -</option>
                        <option value='Breakfast'>Breakfast</option>
                        <option value='Lunch'>Lunch</option>
                        <option value='Brunch'>Brunch</option>
                        <option value='Tea Time'>Tea Time</option>
                        <option value='Dinner'>Dinner</option>
                        <option value='Appetizers'>Appetizers</option>
                    </Field>
                    <ErrorMessage name='recipe_category_occasion' component='div' className='text-danger' />
                </FormBootstrap.Group>

                <FormBootstrap.Group className='mb-5' controlId='type'>
                    <FormBootstrap.Label className='w-100'>Type</FormBootstrap.Label>
                    <Field
                        name='recipe_category_type'
                        type='radio'
                        value='Vegan'
                        id='radioVegan'
                        label='Vegan'
                        inline
                        as={FormBootstrap.Check}
                    />
                    <Field
                        name='recipe_category_type'
                        type='radio'
                        value='Vegetarian'
                        id='radioVegetarian'
                        label='Vegetarian'
                        inline
                        as={FormBootstrap.Check}
                    />
                    <ErrorMessage name='recipe_category_type' component='div' className='text-danger' />
                </FormBootstrap.Group>

                <div className='d-flex justify-content-center'>
                    <Button
                        className='primary-btn d-flex align-items-center column-gap-2 py-2'
                        type='submit'
                    >
                        <MdOutlineAddCircle className='fs-5' />
                        Create a New Recipe!
                    </Button>
                </div>
            </Form>
        </Formik>
    );
};

export default CreateRecipe;
