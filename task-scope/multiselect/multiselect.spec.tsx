import React from 'react';
import { render } from '@testing-library/react';
import {Multiselect } from './multiselect';

it('renders with the correct text', () => {
  const { getByText } = render(<Multiselect />);
  const rendered = getByText('Select option');
  expect(rendered).toBeTruthy();
 
});
