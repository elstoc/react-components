import { fireEvent, render, screen } from '@testing-library/react';
import Input from './Input';
import Form from './Form';

describe("that the Input Component", () => {

  it('shows an input pre-populated with initialValue', () => {
    render(<Form><Input name="test" initialValue="starting point" /></Form>);

    const inputElement = screen.getByDisplayValue('starting point');
    expect(inputElement).toBeInTheDocument();
  });

  it('changes its value when updated', () => {
    render(<Form><Input name="test" initialValue="starting point" /></Form>);

    const inputElement = screen.getByDisplayValue('starting point');
    fireEvent.change(inputElement, { target: { value: 'ending point' } });

    const sameInputElement = screen.getByDisplayValue('ending point');
    expect(sameInputElement).toBeInTheDocument();
  });

  it('renders a label when asked', () => {
    render(<Form><Input name="test" labelText="my label" /></Form>);
    const labelElement = screen.getByLabelText('my label');
    expect(labelElement).toBeInTheDocument();
  });

  it('renders no label when not asked', () => {
    render(<Form><Input name="test" /></Form>);
    const labelElement = screen.queryByLabelText('my label');
    expect(labelElement).toBeNull();
  });
});