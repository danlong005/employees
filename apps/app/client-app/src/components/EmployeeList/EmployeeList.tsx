import React from 'react';
import { IEmployeeListProps } from '../../props';
import './EmployeeList.css';

export const EmployeeList: React.FC<IEmployeeListProps> = ({employees, selectedEmployee}: IEmployeeListProps) => {
  return (
    <ul className={"employee-list"}>
      {employees?.map((employee) => {
        return <li key={employee.id} className={"employee-list-element"}>
                  <a onClick={() => selectedEmployee(employee)}
                     className={"employee-list-link"}>{employee.lastName}, {employee.firstName}</a>
                </li>
      })}
    </ul>
  )
}