import { fireEvent, render, screen } from '@testing-library/react';
import NumInput from './NumInput';
import Form from './Form';

describe("that the NumInput Component", () => {

  it('shows an input pre-populated with initialValue', () => {
    render(<Form><NumInput name="test" initialValue="1234" /></Form>);

    const inputElement = screen.getByDisplayValue('1234');
    expect(inputElement).toBeInTheDocument();
  });

  it('does not allow non-numeric input, except eE.-', () => {
    render(<Form><NumInput name="test" initialValue="1234" /></Form>);

    const inputElement = screen.getByDisplayValue('1234');
    fireEvent.change(inputElement, { target: { value: '5678abcdeE.-' } });

    const sameInputElement = screen.getByDisplayValue('5678eE.-');
    expect(sameInputElement).toBeInTheDocument();
  });

  it('disallows eE. for integer inputs', () => {
    render(<Form><NumInput name="test" numType="int" initialValue="1234" /></Form>);

    const inputElement = screen.getByDisplayValue('1234');
    fireEvent.change(inputElement, { target: { value: '5678abcdeE.-' } });

    const sameInputElement = screen.getByDisplayValue('5678-');
    expect(sameInputElement).toBeInTheDocument();
  });
});
