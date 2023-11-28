import { render, screen, fireEvent } from '@testing-library/react';
import IngredientItem from './IngredientItem';
import { Ingredient } from '../../types/ingredient';

const mockIngredient: Ingredient = {
    id: 'abc123-def456-ghi789-jkl012-mno345',
    quantity: '1 cup',
    text: 'Flour',
};

const mockRemoveIngredient = jest.fn();

describe('IngredientItem Component', () => {
    it('renders ingredient with delete button', () => {
        render(<IngredientItem ingredient={mockIngredient} removeIngredient={mockRemoveIngredient} />);

        // Assert that the ingredient is rendered with the correct quantity and text
        expect(screen.getByText('1 cup Flour')).toBeInTheDocument();

        // Assert that the delete button is rendered
        expect(screen.getByTitle('Delete this item')).toBeInTheDocument();
    });

    it('calls removeIngredient when delete button is clicked', () => {
        render(<IngredientItem ingredient={mockIngredient} removeIngredient={mockRemoveIngredient} />);

        // Simulate a click on the delete button
        fireEvent.click(screen.getByTitle('Delete this item'));

        // Assert that removeIngredient is called with the correct ingredient id
        expect(mockRemoveIngredient).toHaveBeenCalledWith('abc123-def456-ghi789-jkl012-mno345');
    });
});