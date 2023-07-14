import { Department } from "./department.model";
import { Requet } from "./request.model";
import { Role } from "./role.model";
import { RoleClaim } from "./roleclaim.model";

export class Account {
    public id: number;
    public username?: string;
    public password?: string;
    public idRole?: number;
    public idDepartment?: number;
    public fullname?: string;
    public emailaddress?: string;
    public phonenumber?: string;
    public address?: string;
    public citizenidentification?: string;
    public dateofbirth?: Date;
    public sex?: boolean;
    public status?: boolean;
    public role?: string;
    public class?: string;
    public schoolyear?: string;
    public degree?: string;
    public academicrank?: string;
    public idDepartmentNavigation?: Department;
    public idRoleNavigation?: Role;
    public requetIdComplainNavigations?: Requet[];
    public requetIdHandleNavigations?: Requet[];
    public idRoleClaims?: RoleClaim[];
    // constructor() {
    //     this.id = 0;
    //     this.username = '';
    //     this.password = '';
    //     this.idRole = 0;
    //     this.idDepartment = 0;
    //     this.idDepartmentNavigation = new Department();
    //     this.idRoleNavigation = new Role();
    //     this.requetIdComplainNavigations = [];
    //     this.requetIdHandleNavigations = [];
    //     this.idRoleClaims = [];
    //   }
    }
