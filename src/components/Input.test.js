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
    expect(inputElement).toHaveValue('ending point');

  });

  it('has a revert button if one requested', async () => {
    render(<Form><Input revertButton={true}  name="test" initialValue="starting point" /></Form>);

    const buttonElement = screen.queryByRole('button');
    expect(buttonElement).toBeInTheDocument();

  });

  it('reverts to initial value when revert button clicked', async () => {
    render(<Form><Input name="test" revertButton={true} initialValue="starting point" /></Form>);

    const inputElement = screen.getByDisplayValue('starting point');
    fireEvent.change(inputElement, { target: { value: 'ending point' } });
    expect(inputElement).toHaveValue('ending point');

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(inputElement).toHaveValue('starting point');

  });

  it('has no revert button if none requested', async () => {
    render(<Form><Input name="test" initialValue="starting point" /></Form>);

    const buttonElement = screen.queryByRole('button');
    expect(buttonElement).toBeNull();

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