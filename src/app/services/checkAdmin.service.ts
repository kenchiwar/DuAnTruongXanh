import { CanActivate } from "@angular/router";

export class Admin implements CanActivate{

  canActivate(): boolean { return false ; }
}
