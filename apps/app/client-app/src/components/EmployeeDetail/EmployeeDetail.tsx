import React from 'react';
import { IEmployeeDetailProps } from '../../props';
import { dateFormatter, nameFormatter, salaryFormatter } from '../../formatters';

export const EmployeeDetail: React.FC<IEmployeeDetailProps> = ({employee}: IEmployeeDetailProps) => {
  return (
    <div>
      <div>{employee?.id}</div>
      <div>{nameFormatter(employee?.firstName, employee?.lastName)}</div>
      <div>{dateFormatter(employee?.hiredAt)}</div>
      <div>{salaryFormatter(employee?.salary)}</div>
    </div>
  );
};