import React, { useEffect, useState } from 'react';
import './App.css';
import { IAppProps } from '../../props';
import { getEmployees } from '../../services';
import { IEmployee, IEmployeeSdkResponse } from '../../models';

export const App: React.FC<IAppProps> = ({}: IAppProps) => 
{
  const [employees, setEmployees] = useState<Array<IEmployee> | null>(null);

  useEffect(() => {
    (async () => {
      let response: IEmployeeSdkResponse =  await getEmployees();
      setEmployees(response.employees);
    })();
  }, [])

  return (
    <div className="App">
      <>
        {employees?.map((emp) => {
          <p key={emp.id}>{emp.id}</p>
        })}
      </>
    </div>
  );
};