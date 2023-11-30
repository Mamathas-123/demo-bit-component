import React from 'react';
import { render } from '@testing-library/react';
import { Login } from './login';

it('renders with the correct text', () => {
  const { getByText } = render(<Login  onSubmit={()=>alert()} />);
  const rendered = getByText('Email');
  expect(rendered).toBeTruthy();
});
