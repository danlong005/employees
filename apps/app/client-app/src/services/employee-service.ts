import axios from 'axios';
import { IEmployee, IEmployeeSdkResponse } from "../models";

function getBaseRoute() {
  return "https://localhost:7273";
}

async function getEmployees(): Promise<IEmployeeSdkResponse> {
  let url = `${getBaseRoute()}/api/v1/employees`;

  let employeeResponse: IEmployeeSdkResponse = {
    status: 0,
    employees: null,
    employee: null,
  }

  let response: any = await axios.get(url);
  employeeResponse.status = response.status;

  employeeResponse.employees = response.data.map((emp: any) => {
    return <IEmployee>{ id: emp.id };
  });

  if (employeeResponse.employees == null) employeeResponse.employees = [<IEmployee>{}];

  return employeeResponse;
}

export { 
  getEmployees
}