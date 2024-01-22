import React from 'react';
import { render } from '@testing-library/react';
import { BasicDropdown } from './dropdown.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicDropdown />);
  const rendered = getByText('fruit');
  expect(rendered).toBeTruthy();
});
