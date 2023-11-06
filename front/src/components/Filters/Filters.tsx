import React, { useState } from 'react';
import { BiSearchAlt, BiSolidFilterAlt } from 'react-icons/bi';
import { Form, ListGroup, InputGroup, Button } from 'react-bootstrap';
import './filters.css';

interface FiltersProps {
    display: string;
}

const Filters: React.FC<FiltersProps> = (props) => {
    const [searchInput, setSearchInput] = useState('');
    const [occasionChecked, setOccasionChecked] = useState<string[]>([]);
    const [typeChecked, setTypeChecked] = useState<string[]>([]);

    const occasions: string[] = ["Breakfast", "Lunch", "Brunch", "Tea Time", "Dinner", "Appetizers"];

    const handleOccasionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (occasionChecked.includes(value)) {
            setOccasionChecked(occasionChecked.filter((occasion) => occasion !== value));
        } else {
            setOccasionChecked([...occasionChecked, value]);
        }
    };

    const handleType = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (typeChecked.includes(value)) {
            setTypeChecked(typeChecked.filter((type) => type !== value));
        } else {
            setTypeChecked([...typeChecked, value]);
        }
    };

    return (
        <Form className={"col-lg-6 recipes-filters list-group list-group-flush mx-auto py-2 px-3 border rounded-4 border-black animate__animated animate__slideInLeft" + props.display || ""}>
            <ListGroup.Item className="px-2 py-3 d-flex justify-content-between align-items-center">
                <h3 className='mb-0'>Filters</h3>
                <BiSolidFilterAlt className='fs-4' />
            </ListGroup.Item>

            <ListGroup.Item className="py-4 px-2">
                <label htmlFor="searchInput" className="form-label">
                    <BiSearchAlt className='fs-5 me-1' />
                    Search by name or ingredient
                </label>
                <InputGroup>
                    <Form.Control
                        type="text"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        id="searchInput"
                        placeholder="Tomato Soup..."
                    />
                </InputGroup>
            </ListGroup.Item>

            <ListGroup.Item className="py-4 px-2">
                <h3 className="fs-4">Occasion</h3>
                <div className="d-flex flex-wrap gap-2 mt-3" role="group" aria-label="Occasion">
                    {occasions.map((occasion) => (
                        <div key={occasion}>
                            <Form.Check
                                type="checkbox"
                                id={occasion}
                                label={occasion}
                                value={occasion}
                                checked={occasionChecked.includes(occasion)}
                                onChange={handleOccasionChange}
                            />
                        </div>
                    ))}
                </div>
            </ListGroup.Item>

            <ListGroup.Item className="py-4 px-2">
                <h3 className="fs-4">Dietary Type</h3>
                <div className="d-flex flex-wrap gap-2 mt-3" role="group" aria-label="Occasion">
                    {["Vegan", "Vegetarian"].map((type) => (
                        <div key={type}>
                            <Form.Check
                                type="checkbox"
                                id={type}
                                label={type}
                                value={type}
                                checked={typeChecked.includes(type)}
                                onChange={handleType}
                            />
                        </div>
                    ))}
                </div>
            </ListGroup.Item>

            <Button type="submit" className="primary-btn mt-3 w-100">Apply filters</Button>
            <Button type="submit" className="secondary-btn my-3 w-100">Clear filters</Button>
        </Form>
    );
};

export default Filters;