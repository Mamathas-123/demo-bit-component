import React, { ReactNode } from 'react';
import {Input} from  '@mamathas/task-scope.input';
import {Button} from '@mamathas/task-scope.button';

export type LoginProps = {
  children?: ReactNode;
};

export function Login({ children }: LoginProps) {
  return (
    <div>
      {children}
      <Input>User name</Input>
      <Button type="submit" label="Submit"/>
    </div>
  );
}
