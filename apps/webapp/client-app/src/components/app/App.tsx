import React from 'react';
import './App.css';
import { IAppProps } from '../../props';
import { EmployeeViewer } from '../../components';

export const App: React.FC<IAppProps> = ({}: IAppProps) => 
{

  return (
    <div className="App">
      <EmployeeViewer />
    </div>
  );
};