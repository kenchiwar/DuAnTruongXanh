import { Requet } from "./request.model";
import { Account } from "./account.model";

export class Department {
    public id: number;
    public tenDepartment?: string;
    public describe?: string;
    public address?: string;
    public status?: boolean;
    public accounts?: Account[];
    public requets?: Requet[];
  
    // constructor() {
    //   this.id = 0;
    //   this.accounts = [];
    //   this.requets = [];
    // }
  }