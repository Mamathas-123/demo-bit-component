import React from 'react';
import { Input } from './input';

export const BasicInput = () => {
  return (
    <Input type="text" name ="email"  label="Email" onChange={(e) => e.target.value}/>
  );
}
