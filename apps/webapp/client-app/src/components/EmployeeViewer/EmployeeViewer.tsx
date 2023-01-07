import React, { useState } from 'react';
import { IEmployeeViewerProps } from '../../props';
import './EmployeeViewer.css';
import { useQuery } from 'react-query';
import { getEmployees } from '../../services';
import { EmployeeList, EmployeeDetail, EmployeeHeader, EmployeeFooter, EmployeeToolbar } from '../../components';
import { IEmployee } from '../../models';

export const EmployeeViewer: React.FC<IEmployeeViewerProps> = ({}: IEmployeeViewerProps) => {
  const { data, status } = useQuery("employees", getEmployees);
  const [selectedEmployee, setSelectedEmployee] = useState<IEmployee>();

  const handledSelectedEmployee = (employee: IEmployee) => {
    setSelectedEmployee(employee);
  }

  return (
    <div className={"employee-viewer-container"}>
      <div className={"employee-viewer-header"}>
        <EmployeeHeader />
      </div>
      <div className={"employee-viewer-body"}>
        <div className={"employee-viewer-body-menu"}>
          {status === 'success' && data.employees ? 
            <EmployeeList employees={data!.employees} selectedEmployee={handledSelectedEmployee}/> :
            <div>No Employees Found</div>
          }
        </div>
        <div className={"employee-viewer-body-content"}>
          <div className={"employee-viewer-body-content-toolbar"}>
            <EmployeeToolbar />
          </div>
          <div className={"employee-viewer-body-content-main"}>
            <EmployeeDetail employee={selectedEmployee!} />
          </div>
          <div className={"employee-viewer-body-content-footer"}>
            <EmployeeFooter />
          </div>
        </div>
      </div>
    </div>
    
  );  
}