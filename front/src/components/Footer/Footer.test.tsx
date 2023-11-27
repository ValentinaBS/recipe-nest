import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { BrowserRouter as Router } from "react-router-dom";

describe('Footer Component', () => {
    test('renders footer content', () => {
        render(<Router><Footer /></Router>);

        // Test social media links
        expect(screen.getByTestId('facebook-link'))
            .toHaveAttribute('href', 'https://www.facebook.com/');
        expect(screen.getByTestId('instagram-link'))
            .toHaveAttribute('href', 'https://www.instagram.com/');
        expect(screen.getByTestId('tiktok-link'))
            .toHaveAttribute('href', 'https://www.tiktok.com/');

        // Test contact information
        expect(screen.getByText(/New York, NY 10012, US/i)).toBeInTheDocument();
        expect(screen.getByText(/gpcontact@gmail.com/i)).toBeInTheDocument();
        expect(screen.getByText(/\+01 234 567 88/i)).toBeInTheDocument();
        expect(screen.getByText(/\+01 234 542 89/i)).toBeInTheDocument();
    });
});