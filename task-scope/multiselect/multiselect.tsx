import React from 'react';
import Select from 'react-select';
import './multiselect.css';

export type MultiselectProps = {
  options?:any;
};

export function Multiselect({ options}: MultiselectProps) {
  return (
    <div className="custom-select">
      <h2> Select option</h2>
      <Select className="select" 
      isMulti
      options={options}/>
     
    </div>
  );
}
