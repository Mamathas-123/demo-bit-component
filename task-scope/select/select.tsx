import React from 'react';
import './select.css'

export type SelectProps = {
  value?:string;
  options?:any;
  onChange?:()=>void;

};

export function Select({ options,onChange}: SelectProps) {
  // generate select dropdown option list dynamically
//   function Options({ options }) {
//     return (
//         options.map(option => 
//                     <option key={option.id} value={option.value}>                                   
//                     {option.value}
//                     </option>)
//                    );
// }

  return (
    <div className="custom-select" >
      <select className="selectOption"    
      onChange={onChange} >
      {options && options.map(option => 
                    <option key={option.id} value={option.value}>                                   
                    {option.value}
                    </option>)}
            
        </select>
        
      
    </div>
  );
}
