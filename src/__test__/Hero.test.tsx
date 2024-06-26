// src/__tests__/Hero.test.tsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from '../components/Hero';
import '@testing-library/jest-dom';

describe('Hero Component', () => {
  it('Should renders the hero component with the correct title', () => {
    render(
      <Router>
        <Hero hideButton={false} />
      </Router>
    );

    // Check if the headline is rendered
    const headline = screen.getByText("Sewa & Rental Mobil Terbaik di Kawasan Sulawesi Tengah");
    expect(headline).toBeInTheDocument();
    expect(headline).toBeVisible();
  });
});
