import React from 'react';
import './dropdown.css';

export type DropdownProps = {
  value?:string;
  options?:any;
  onChange?:()=>void;
};

export function Dropdown({ options,onChange}: DropdownProps) {
  return (
    <div className="custom-select " >
     <select    
      onChange={onChange} >
      {options && options.map(option => 
                    <option key={option.id} value={option.value}>                                   
                    {option.value}
                    </option>)}
            
        </select>
       
    </div>
  );
}
