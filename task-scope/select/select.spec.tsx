import React from 'react';
import { render } from '@testing-library/react';
import { BasicSelect } from './select.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicSelect />);
  const rendered = getByText('Tiger');
  expect(rendered).toBeTruthy();
});
