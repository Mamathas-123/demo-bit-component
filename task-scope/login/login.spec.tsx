import React from 'react';
import { render } from '@testing-library/react';
import { Login } from './login';

it('renders with the correct text', () => {
  const { getByText } = render(<Login />);
  const rendered = getByText('Submit');
  expect(rendered).toBeTruthy();
});
