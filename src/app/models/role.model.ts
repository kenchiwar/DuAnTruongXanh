import { Account } from "./account.model";

export interface Role {
  id: number;
  name?: string;
  describe?: string;
  accounts: Account[];
}