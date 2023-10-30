import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { MdOutlineAddCircle } from 'react-icons/md';
import imagePlaceholder from '../../assets/add-image.png';
import './createRecipe.css'

const CreateRecipe = () => {
    const [selectedFile, setSelectedFile] = useState(imagePlaceholder);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedFile(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <Form className='my-5 mx-4 mx-md-auto create-form'>
            <Form.Group className='mb-4' controlId='image'>
                <Form.Label className='d-flex flex-column row-gap-3 justify-content-center align-items-center' role="button" htmlFor='imageUpload'>
                    {selectedFile && (
                        <img
                            src={selectedFile}
                            alt="Uploaded"
                            className='uploaded-image'
                        />
                    )}
                    Show others your finished dish!
                </Form.Label>

                <Form.Control
                    type='file'
                    accept="image/*"
                    id="imageUpload"
                    onChange={handleFileChange}
                    className='d-none'
                />
            </Form.Group>

            <Form.Group className='mb-4' controlId='title'>
                <Form.Label>Title</Form.Label>
                <Form.Control placeholder='Traditional Tomato Soup...' />
            </Form.Group>

            <Row className='mb-4'>
                <Form.Group as={Col} controlId='serves'>
                    <Form.Label>Serves</Form.Label>
                    <Form.Control type='text' placeholder='3 people' />
                </Form.Group>

                <Form.Group as={Col} controlId='cookTime'>
                    <Form.Label>Cook Time</Form.Label>
                    <Form.Control type='text' placeholder='2hr 30mins' />
                </Form.Group>
            </Row>

            <Form.Group className='mb-4' controlId='ingredients'>
                <Form.Label>Ingredients</Form.Label>
                <Form.Control type='text' aria-describedby='ingredientsHelp' placeholder='2l water, 500gr tomatos...' />
                <Form.Text id='ingredientsHelp'>
                    Make sure to separate the ingredients with commas.
                </Form.Text>
            </Form.Group>

            <Form.Group className='mb-4' controlId='instructions'>
                <Form.Label>Instructions</Form.Label>
                <Form.Control as='textarea' rows={3} placeholder='Step 1: Preheat the oven...' />
            </Form.Group>


            <Form.Group className='mb-4' controlId='occasion'>
                <Form.Label>Occasion</Form.Label>
                <Form.Select defaultValue='- Select an occasion -'>
                    <option disabled>- Select an occasion -</option>
                    <option value='breakfast'>Breakfast</option>
                    <option value='lunch'>Lunch</option>
                    <option value='brunch'>Brunch</option>
                    <option value='tea time'>Tea Time</option>
                    <option value='dinner'>Dinner</option>
                    <option value='appetizers'>Appetizers</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className='mb-5' controlId='type'>
                <Form.Label className='w-100'>Type</Form.Label>
                <Form.Check
                    inline
                    label='Vegan'
                    name='type'
                    type='radio'
                    id='radioVegan'
                />
                <Form.Check
                    inline
                    label='Vegetarian'
                    name='type'
                    type='radio'
                    id='radioVegetarian'
                />
            </Form.Group>

            <div className='d-flex justify-content-center'>
                <Button className='primary-btn d-flex align-items-center column-gap-2 py-2' type='submit'>
                    <MdOutlineAddCircle className='fs-5' />
                    Create a New Recipe!
                </Button>
            </div>
        </Form>
    )
}

export default CreateRecipe