import React from 'react';
import { Dropdown } from './dropdown';

export const BasicDropdown = () => {

  const options = [

    { label: 'Fruit', value: 'fruit' },
 
    { label: 'Vegetable', value: 'vegetable' },
 
    { label: 'Meat', value: 'meat' },
 
  ];
  return (
    <Dropdown
    options={options}/>
  );
}
