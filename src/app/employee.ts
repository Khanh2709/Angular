import {Department} from './department';
export class Employee {
  constructor() {
  }
   id: number;
  lastName: string;
   firstName: string;
  // tslint:disable-next-line:variable-name
   salary_emp: number;
 public department: Department;
  active: boolean;
}
export const dep =
  [{   depId: 2,
    depName: 'Tham dinh'}, {
    depId: 28,
    depName: 'Ho tro'
  }
  ]
