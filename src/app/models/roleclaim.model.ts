import { Account } from "./account.model";

export interface RoleClaim {
  id: number;
  name?: string;
  describe?: string;
  claim?: number;
  idAccounts: Account[];
}