import React from 'react';
import './input.css';

export type InputProps = {
  /**
   * a node to be rendered in the special component.
   */
  name?:string;
  value?:string;
  label?:string;
  type?:string;
  onChange?:(e)=>void;
};

export function Input({ name,value,label,type,onChange }:InputProps) {
  return (
    <div>
      <form>
       {label}
      <input name={name} type={type} onChange={onChange}
      value={value} 
/>   </form>

    </div>
  );
}
