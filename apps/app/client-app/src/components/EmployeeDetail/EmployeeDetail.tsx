import React from 'react';
import { IEmployeeDetailProps } from '../../props';

export const EmployeeDetail: React.FC<IEmployeeDetailProps> = ({employee}: IEmployeeDetailProps) => {
  return (
    <div>{employee?.id}</div>
  );
};