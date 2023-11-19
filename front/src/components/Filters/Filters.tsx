import React, { useState } from 'react';
import { BiSearchAlt, BiSolidFilterAlt } from 'react-icons/bi';
import { Form, ListGroup, InputGroup, Button } from 'react-bootstrap';
import './filters.css';

interface FiltersProps {
    display?: string;
    onFilterChange: (type: string, value: string) => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    searchInput: string;
    occasionFilters: string[];
    typeFilters: string[];
}

const Filters: React.FC<FiltersProps> = (props) => {
    const {
        onFilterChange,
        onSubmit,
        searchInput,
        occasionFilters,
        typeFilters,
        display,
    } = props;

    const occasions: string[] = ["Lunch", "Breakfast", "Brunch", "Tea Time", "Dinner", "Appetizers"];

    const handleOccasionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onFilterChange('occasion', e.target.value);
    };

    const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onFilterChange('type', e.target.value);
    };

    return (
        <Form onSubmit={onSubmit} className={"col-lg-6 recipes-filters list-group list-group-flush mx-auto py-2 px-3 border rounded-4 border-black animate__animated animate__slideInLeft" + props.display || ""}>
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
                        id="searchInput"
                        placeholder="Tomato Soup..."
                    />
                </InputGroup>
            </ListGroup.Item>

            <ListGroup.Item className="py-4 px-2">
                <h3 className="fs-4">Occasion</h3>
                <div className="d-flex flex-wrap row-gap-2 column-gap-4 mt-3" role="group" aria-label="Occasion">
                    {occasions.map((occasion) => (
                        <div key={occasion}>
                            <Form.Check
                                type="checkbox"
                                id={occasion}
                                label={occasion}
                                value={occasion}
                                checked={occasionFilters.includes(occasion)}
                                onChange={handleOccasionChange}
                            />
                        </div>
                    ))}
                </div>
            </ListGroup.Item>

            <ListGroup.Item className="py-4 px-2">
                <h3 className="fs-4">Dietary Type</h3>
                <div className="d-flex flex-wrap gap-4 mt-3" role="group" aria-label="Occasion">
                    {["Vegan", "Vegetarian"].map((type) => (
                        <div key={type}>
                            <Form.Check
                                type="checkbox"
                                id={type}
                                label={type}
                                value={type}
                                checked={typeFilters.includes(type)}
                                onChange={handleTypeChange}
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