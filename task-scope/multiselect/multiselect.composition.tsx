import React from 'react';
import { Multiselect } from './multiselect';

export const BasicMultiselect = () => {
  const optionList = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "yellow", label: "Yellow" },
    { value: "blue", label: "Blue" },
    { value: "white", label: "White" }
  ];
  return (
    <Multiselect options={optionList} />
  );
}
