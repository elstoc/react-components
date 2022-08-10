import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe("that the Button Component", () => {

  it('shows a Button populated with text', () => {
    render(<Button text="a button"/>);

    const inputElement = screen.getByRole('button');
    expect(inputElement).toHaveTextContent('a button')
  });

});
