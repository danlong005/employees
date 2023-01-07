import { IEmployee } from '../models';

export interface IEmployeeListProps {
  employees: IEmployee[];
  selectedEmployee: (selectedEmployee: IEmployee) => void
};