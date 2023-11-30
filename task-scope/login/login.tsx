import React, { useState,ReactNode } from 'react';
import {Input} from  '@mamathas/task-scope.input';
import {Button} from '@mamathas/task-scope.button';
import {Title} from '@mamathas/task-scope.title';

export type LoginProps = {
  children?: ReactNode;
  onSubmit: (data: { email: string; password: string }) => void;
 
};

export function Login({ onSubmit }: LoginProps) {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  return (
    <form     onSubmit={(e) => {
      e.preventDefault();
      onSubmit(data);
    }}>
      <Title> Login form</Title>
    
      <Input value={data.email}
        onChange={(e) =>
          setData({
            ...data,
            email: e.target.value,
          })
        }
        label="Email"/>

<Input
        value={data.password}
        onChange={(e) =>
          setData({
            ...data,
            password: e.target.value,
          })
        }
        label="Password"
      />
      <Button>Submit</Button>
    </form>
  );
}
