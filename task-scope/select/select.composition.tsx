import React from 'react';
import { Select } from './select';

export const BasicSelect = () => {

  const animalsList = [
    { 
        id: 1,
        value: 'Open this select menu'
    }, {
        id: 2,
        value: 'Lion'
    }, {
        id: 3,
        value: 'Dog'
    }, {
        id: 4,
        value: 'Cat'
    },
    {
      id:5,
      value:'Tiger'
    },
    {
      id: 2,
      value: 'Lion'
  }, {
      id: 3,
      value: 'Dog'
  }, {
      id: 4,
      value: 'Cat'
  },
  {
    id:5,
    value:'Tiger'
  }
    ];
  
  return (
    <Select  options={animalsList}
      />
  );
}
