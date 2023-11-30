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
  onChange?:(e)=>void;
};

export function Input({ children,name,value,label,type,onChange }:InputProps) {
  return (
    <div>
      {children}
      <form>
      {label}
      <input name={name} type={type} onChange={onChange}
      value={value} style={{
    padding:"10px 15px",
    marginBottom:"15px",
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '20vw',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
}}/>
     
      </form>
    </div>
  );
}
