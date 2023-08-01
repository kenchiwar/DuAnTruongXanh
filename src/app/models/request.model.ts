import { Account } from "./account.model";
import { Department } from "./department.model";
import { RequestFile } from "./requestfile.model";
import { Requetsdetailed } from "./requetsdetailed.model";

export interface Requet {
  id: number;
  idComplain: number;
  idDepartment: number;
  idHandle?: number;
  title?: string;
  status?: number;
  level: number;
  sentDate?: Date;
  endDate?: Date;
  priority?: number;
  idComplainNavigation?: Account;
  idDepartmentNavigation?: Department;
  idHandleNavigation?: Account;
  requestFiles?: RequestFile[];
  requetsdetaileds?: Requetsdetailed[];
}