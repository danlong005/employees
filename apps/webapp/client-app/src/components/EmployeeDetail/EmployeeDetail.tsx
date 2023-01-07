import React from 'react';
import { IEmployeeDetailProps } from '../../props';
import { dateFormatter, nameFormatter, salaryFormatter } from '../../formatters';
import './EmployeeDetail.css';

export const EmployeeDetail: React.FC<IEmployeeDetailProps> = ({employee}: IEmployeeDetailProps) => {
  return (
    employee ? 
      <div className={"employee-detail-container"}>
        <div className={"employee-detail-image-row"}>
          <img src={employee?.image} />
        </div>
        <div className={"employee-detail-row"}>
          <div className={"employee-detail-col"}>Id:</div>
          <div className={"employee-detail-col"}>{employee?.id}</div>
        </div>
        <div className={"employee-detail-row"}>
          <div className={"employee-detail-col"}>Name:</div>
          <div className={"employee-detail-col"}>{nameFormatter(employee?.firstName, employee?.lastName)}</div>
        </div>
        <div className={"employee-detail-row"}>
          <div className={"employee-detail-col"}>Hire Dt:</div>
          <div className={"employee-detail-col"}>{dateFormatter(employee?.hiredAt)}</div>
        </div>
        <div className={"employee-detail-row"}>
          <div className={"employee-detail-col"}>Salary</div>
          <div className={"employee-detail-col"}>{salaryFormatter(employee?.salary)}</div>
        </div>
      </div>
      : <></> 
  );
};