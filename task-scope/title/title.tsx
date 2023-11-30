import React, { ReactNode } from 'react';

export type TitleProps = {
  children?: ReactNode;
};

export function Title({ children }: TitleProps) {
  return (
    <div>
      <h1> {children}</h1>
     
    </div>
  );
}
