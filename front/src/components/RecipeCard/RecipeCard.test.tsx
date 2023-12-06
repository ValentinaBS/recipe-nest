import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const mockRecipe = {
    recipe_id: 1,
    recipe_image: 'https://example.com/image.jpg',
    recipe_title: 'Test Recipe',
    recipe_published_time: '12/01/2023',
    recipe_instructions: 'This is a test recipe.',
    recipe_category_type: 'Vegan',
    recipe_category_occasion: 'Dinner',
    recipe_likes: 10,
};

describe('RecipeCard Component', () => {
    it('renders recipe card with correct content', () => {
        render(
            <Router>
                <RecipeCard recipe={mockRecipe} />
            </Router>
        );

        expect(screen.getByAltText(mockRecipe.recipe_title)).toBeInTheDocument();
        expect(screen.getByText(mockRecipe.recipe_title)).toBeInTheDocument();
        expect(screen.getByText(mockRecipe.recipe_published_time)).toBeInTheDocument();
        expect(screen.getByText(`${mockRecipe.recipe_category_type} - ${mockRecipe.recipe_category_occasion}`)).toBeInTheDocument();
        expect(screen.getByText(mockRecipe.recipe_instructions)).toBeInTheDocument();
        expect(screen.getByText(`${mockRecipe.recipe_likes}`)).toBeInTheDocument();
    });

    it('renders NavLink to /recipe', () => {
        render(
            <Router>
                <RecipeCard recipe={mockRecipe} />
            </Router>
        );

        const navLink = screen.getByTestId('recipeNavLink');
        expect(navLink).toHaveAttribute('href', '/recipe');
    });
});