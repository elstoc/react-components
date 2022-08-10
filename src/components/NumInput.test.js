import { fireEvent, render, screen } from '@testing-library/react';
import NumInput from './NumInput';

describe("that the NumInput Component", () => {

  it('shows an input pre-populated with initialValue', () => {
    render(<NumInput name="test" initialValue="1234" />);

    const inputElement = screen.getByDisplayValue('1234');
    expect(inputElement).toBeInTheDocument();
  });

  it('does not allow non-numeric input, except eE.-', () => {
    render(<NumInput name="test" initialValue="1234" />);

    const inputElement = screen.getByDisplayValue('1234');
    fireEvent.change(inputElement, { target: { value: '5678abcdeE.-' } });

    const sameInputElement = screen.getByDisplayValue('5678eE.-');
    expect(sameInputElement).toBeInTheDocument();
  });

  it('disallows eE. for integer inputs', () => {
    render(<NumInput name="test" numType="int" initialValue="1234" />);

    const inputElement = screen.getByDisplayValue('1234');
    fireEvent.change(inputElement, { target: { value: '5678abcdeE.-' } });

    const sameInputElement = screen.getByDisplayValue('5678-');
    expect(sameInputElement).toBeInTheDocument();
  });
});
