import React, { ReactNode } from 'react';


export type ButtonProps = {
  children?: ReactNode;
  label?:string;
  onClick?:()=>void;

};

export function Button({children,label,onClick }: ButtonProps) {
  /* eslint-disable react/button-has-type */
  return (
    <div>
      
       <button   onClick={onClick} style={{
        padding:'8px 16px',backgroundColor:'red',borderRadius:'6px',fontSize:'15px'}}>{label}{children}</button>
      
    </div>
  );
}
