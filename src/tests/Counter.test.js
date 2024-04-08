import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
});

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const counterElement = screen.getByTestId('count');
  const initialCountVal = parseInt(counterElement.textContent, 10);
  expect(initialCountVal).toBe(0);
  expect(counterElement).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const addButton = screen.getByText('+');
  userEvent.click(addButton);
  const counterElement = screen.getByTestId('count');
  const updatedCountVal = parseInt(counterElement.textContent, 10);
  expect(updatedCountVal).toBe(1);
});

test('clicking - decrements the count', () => {
  const subtractButton = screen.getByText('-');
  userEvent.click(subtractButton);
  const counterElement = screen.getByTestId('count');
  const updatedCountVal = parseInt(counterElement.textContent, 10);
  expect(updatedCountVal).toBe(-1);
});