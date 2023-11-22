import React from 'react';
import { Button } from './button';

export const BasicButton = () => {
  /* eslint-disable react/button-has-type */
  return (
    <Button label="Submit" onClick={()=>alert("clicked")} />
  );
}
