import { render, screen } from '@testing-library/react';
import About from '@/pages/about';

describe('About', () => {
  it('renders a heading', () => {
    render(<About />);

    const heading = screen.getByText(/about/i);

    expect(heading).toBeInTheDocument();
  });
});
