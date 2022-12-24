import React from 'react';
import './App.css';
import { IAppProps } from '../../props';

export const App: React.FC<IAppProps> = ({}: IAppProps) => 
{

  const clickMe = () => {
    alert ("You clicked my button");
  };

  return (
    <div className="App">
      <h2>Here is a change I am making</h2>
    </div>
  );
};