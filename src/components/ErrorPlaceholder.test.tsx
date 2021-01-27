import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ErrorPlaceholder from './ErrorPlaceholder';

test('trigger onRetry callback', () => {
  const onRetry = jest.fn();

  render(<ErrorPlaceholder onRetry={() => onRetry()} />);
  fireEvent.click(screen.getByText('Retry'));

  expect(onRetry).toHaveBeenCalledTimes(1);
});
