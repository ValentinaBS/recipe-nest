import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const mockRecipe = {
    recipe_id: 1,
    recipe_title: "Pasta",
    recipe_instructions: "Cook pasta until al dente...", 
    recipe_likes: 0,
    recipe_cooktime: "30 mins",
    recipe_portions: 4,
    recipe_published_time: "2023-11-28",
    recipe_category_type: "Vegan",
    user_id: 1,
    recipe_active: 1,
    recipe_category_occasion: "Dinner",
    recipe_ingredients: ["Flour", "Sugar", "Eggs", "Milk"],
    recipe_image: 'https://example.com/image.jpg',
};

describe('RecipeCard Component', () => {
    it('renders recipe card with correct content', async () => {
        render(
            <Router>
                <RecipeCard recipe={mockRecipe} />
            </Router>
        );

        await waitFor(() => {
            expect(screen.getByText(mockRecipe.recipe_title)).toBeInTheDocument();
            expect(screen.getByText(mockRecipe.recipe_published_time)).toBeInTheDocument();
            expect(screen.getByText(`${mockRecipe.recipe_category_type} - ${mockRecipe.recipe_category_occasion}`)).toBeInTheDocument();
            expect(screen.getByText(mockRecipe.recipe_instructions)).toBeInTheDocument();
            expect(screen.getByText(`${mockRecipe.recipe_likes}`)).toBeInTheDocument();
        });
    });

    it('renders NavLink to /recipe', async () => {
        render(
            <Router>
                <RecipeCard recipe={mockRecipe} />
            </Router>
        );

        await waitFor(() => {
            expect(screen.getByTestId('recipeNavLink')).toBeInTheDocument();
        });

        const navLink = screen.getByTestId('recipeNavLink');
        expect(navLink).toHaveAttribute('href', `/recipe/${mockRecipe.recipe_id}`);
    });
});

const originalError = console.error;

beforeAll(() => {
    console.error = jest.fn();
});

afterAll(() => {
    console.error = originalError;
});