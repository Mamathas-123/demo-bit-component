import React, { ReactNode } from 'react';


export type ButtonProps = {
  children?: ReactNode;
  label?:string;
  onClick?:()=>void;
  type?:"button" | "submit" | "reset";

};

export function Button({children,label,onClick,type }: ButtonProps) {
  /* eslint-disable react/button-has-type */
  return (
    <div>
      {children}
       <button  type={type} onClick={onClick} style={{
        padding:'8px 16px',backgroundColor:'red',borderRadius:'6px',fontSize:'15px'}}>{label}</button>
      
    </div>
  );
}
