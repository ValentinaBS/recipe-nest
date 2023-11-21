import React, { useState } from 'react';
import { BiSearchAlt, BiSolidFilterAlt } from 'react-icons/bi';
import { Form, ListGroup, InputGroup, Button, Offcanvas } from 'react-bootstrap';
import './filters.css';

interface FiltersProps {
    searchInput: string;
    occasionFilters: string[];
    typeFilters: string[];
    allOccasions: string[];
    allTypes: string[];
    handleOccasionChange: React.ChangeEventHandler<HTMLInputElement>;
    handleTypeChange: React.ChangeEventHandler<HTMLInputElement>;
    handleSearchInputChange: React.ChangeEventHandler<HTMLInputElement>;
    onSubmit: (e: React.FormEvent) => void;
    clearFilters: () => void;
}

const Filters: React.FC<FiltersProps> = (props) => {
    const {
        searchInput,
        occasionFilters,
        typeFilters,
        allOccasions,
        allTypes,
        handleOccasionChange,
        handleTypeChange,
        handleSearchInputChange,
        onSubmit,
        clearFilters,
    } = props;

    const [showFilters, setShowFilters] = useState(false);

    return (
        <>
            <Button
                onClick={() => setShowFilters(!showFilters)}
                className='primary-btn d-lg-none position-fixed bottom-0 end-0 z-2 m-3 border-white'
            >
                <BiSolidFilterAlt className='fs-5 me-2' />
                Open Filters
            </Button>

            <Form onSubmit={onSubmit} className="col-lg-6 recipes-filters list-group list-group-flush mx-auto py-2 px-3 border rounded-4 border-black d-none d-lg-block">
                <ListGroup.Item className='px-2 py-3 d-flex justify-content-between align-items-center'>
                    <h3 className='mb-0'>Filters</h3>
                    <BiSolidFilterAlt className='fs-4' />
                </ListGroup.Item>

                <ListGroup.Item className='py-4 px-2'>
                    <label htmlFor='searchInput' className='form-label'>
                        <BiSearchAlt className='fs-5 me-1' />
                        Search by name or ingredient
                    </label>
                    <InputGroup>
                        <Form.Control
                            type='text'
                            value={searchInput}
                            id='searchInput'
                            placeholder='Tomato Soup...'
                            onChange={handleSearchInputChange}
                        />
                    </InputGroup>
                </ListGroup.Item>

                <ListGroup.Item className='py-4 px-2'>
                    <h3 className='fs-4'>Occasion</h3>
                    <div className='d-flex flex-wrap row-gap-2 column-gap-4 mt-3' role='group' aria-label='Occasion'>
                        {allOccasions.map((occasion) => (
                            <div key={occasion}>
                                <Form.Check
                                    type='checkbox'
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

                <ListGroup.Item className='py-4 px-2'>
                    <h3 className='fs-4'>Dietary Type</h3>
                    <div className='d-flex flex-wrap gap-4 mt-3' role='group' aria-label='Occasion'>
                        {allTypes.map((type) => (
                            <div key={type}>
                                <Form.Check
                                    type='checkbox'
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
                <Button type="submit" className="primary-btn mt-3 w-100">
                    Apply filters
                </Button>
                <Button
                    type="button"
                    onClick={clearFilters}
                    className="secondary-btn my-3 w-100"
                >
                    Clear filters
                </Button>
            </Form>

            <Offcanvas
                show={showFilters}
                onHide={() => setShowFilters(false)}
                placement='bottom'
                className='h-75'
            >
                <Offcanvas.Header closeButton className='pt-4 pb-0 px-4'>
                    <Offcanvas.Title className='fw-bold ms-1'>
                        Filters
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form onSubmit={onSubmit} className='col-lg-6 recipes-filters list-group list-group-flush mx-auto px-3'>
                        <ListGroup.Item className='py-4 px-0'>
                            <label htmlFor='searchInputMobile' className='form-label'>
                                <BiSearchAlt className='fs-5 me-1' />
                                Search by name or ingredient
                            </label>
                            <InputGroup>
                                <Form.Control
                                    type='text'
                                    value={searchInput}
                                    id='searchInputMobile'
                                    placeholder='Tomato Soup...'
                                    onChange={handleSearchInputChange}
                                />
                            </InputGroup>
                        </ListGroup.Item>

                        <ListGroup.Item className='py-4 px-0'>
                            <h3 className='fs-4'>Occasion</h3>
                            <div className='d-flex flex-wrap row-gap-2 column-gap-4 mt-3' role='group' aria-label='Occasion'>
                                {allOccasions.map((occasion) => (
                                    <div key={occasion}>
                                        <Form.Check
                                            type='checkbox'
                                            id={occasion + 'Mobile'}
                                            label={occasion}
                                            value={occasion}
                                            checked={occasionFilters.includes(occasion)}
                                            onChange={handleOccasionChange}
                                        />
                                    </div>
                                ))}
                            </div>
                        </ListGroup.Item>

                        <ListGroup.Item className='py-4 px-0'>
                            <h3 className='fs-4'>Dietary Type</h3>
                            <div className='d-flex flex-wrap gap-4 mt-3' role='group' aria-label='Occasion'>
                                {allTypes.map((type) => (
                                    <div key={type}>
                                        <Form.Check
                                            type='checkbox'
                                            id={type + 'Mobile'}
                                            label={type}
                                            value={type}
                                            checked={typeFilters.includes(type)}
                                            onChange={handleTypeChange}
                                        />
                                    </div>
                                ))}
                            </div>
                        </ListGroup.Item>

                        <Button type='submit' className='primary-btn mt-3 w-100'>
                            Apply filters
                        </Button>
                        <Button
                            type='button'
                            onClick={() => {
                                clearFilters();
                                setShowFilters(false);
                            }}
                            className='secondary-btn my-3 w-100'
                        >
                            Clear filters
                        </Button>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Filters;