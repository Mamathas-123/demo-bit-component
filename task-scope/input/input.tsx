import React, { ReactNode } from 'react';

export type InputProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
  name?:string;
  value?:string;
  label?:string;
  type?:string;
};

export function Input({ children,name,value,label,type }:InputProps) {
  return (
    <div>
      {children}
      <form>
      {label}
      <input name={name} type={type}
      value={value} style={{padding:"10px 15px",marginBottom:"15px"}}/>
     
      </form>
    </div>
  );
}
