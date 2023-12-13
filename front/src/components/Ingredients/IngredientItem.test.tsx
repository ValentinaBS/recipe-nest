import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import IngredientItem from './IngredientItem';
import { Ingredient } from '../../types/ingredient';

const mockIngredient: Ingredient = {
    id: 'abc123-def456-ghi789-jkl012-mno345',
    text: '1 cup Flour',
};

const mockRemoveIngredient = jest.fn();

describe('IngredientItem Component', () => {
    it('renders ingredient with delete button', async () => {
        render(<IngredientItem ingredient={mockIngredient} removeIngredient={mockRemoveIngredient} />);

        await waitFor(() => {
            // Assert that the ingredient is rendered with the correct quantity and text
            expect(screen.getByText('1 cup Flour')).toBeInTheDocument();
            // Assert that the delete button is rendered
            expect(screen.getByTitle('Delete this item')).toBeInTheDocument();
        });
    });

    it('calls removeIngredient when delete button is clicked', async () => {
        render(<IngredientItem ingredient={mockIngredient} removeIngredient={mockRemoveIngredient} />);

        // Simulate a click on the delete button
        fireEvent.click(screen.getByTitle('Delete this item'));

        await waitFor(() => {
            expect(mockRemoveIngredient).toHaveBeenCalledWith('abc123-def456-ghi789-jkl012-mno345');
        });
    });
});