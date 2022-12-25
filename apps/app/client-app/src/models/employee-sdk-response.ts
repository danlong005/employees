import { ISdkResponse } from './sdk-response';
import { IEmployee } from './employee-interface';

export interface IEmployeeSdkResponse extends ISdkResponse {
  employee: IEmployee | null;
  employees: Array<IEmployee> | null;
}