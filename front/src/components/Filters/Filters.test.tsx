import { render, fireEvent, screen } from '@testing-library/react';
import Filters from './Filters';

const mockFiltersProps = {
    searchInput: '',
    occasionFilters: [],
    typeFilters: [],
    allOccasions: ['Lunch', 'Dinner'],
    allTypes: ['Vegan', 'Vegetarian'],
    handleOccasionChange: jest.fn(),
    handleTypeChange: jest.fn(),
    handleSearchInputChange: jest.fn(),
    onSubmit: jest.fn(),
    clearFilters: jest.fn(),
};

describe('Filters Component', () => {
    it('renders Filters component correctly', () => {
        render(<Filters {...mockFiltersProps} />);

        expect(screen.getByText('Filters')).toBeInTheDocument();
        expect(screen.getByLabelText('Search by name or ingredient')).toBeInTheDocument();
        expect(screen.getByText('Occasion')).toBeInTheDocument();
        expect(screen.getByText('Dietary Type')).toBeInTheDocument();
    });

    it('applies filters on submit', () => {
        render(<Filters {...mockFiltersProps} />);

        // Simulate user input and form submission
        fireEvent.change(screen.getByLabelText('Search by name or ingredient'), {
            target: { value: 'Tomato' },
        });

        fireEvent.submit(screen.getByText('Apply filters'));

        // Assert that the onSubmit function is called with the correct values
        expect(mockFiltersProps.onSubmit).toHaveBeenCalledWith(expect.any(Object));
    });

    it('clears filters on button click', () => {
        render(<Filters {...mockFiltersProps} />);

        // Simulate user input and form submission
        fireEvent.change(screen.getByLabelText('Search by name or ingredient'), {
            target: { value: 'Tomato' },
        });

        fireEvent.click(screen.getByText('Clear filters'));

        // Assert that the clearFilters function is called
        expect(mockFiltersProps.clearFilters).toHaveBeenCalled();
    });
});