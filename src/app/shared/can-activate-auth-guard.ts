//Import core
import { Injectable } from "@angular/core";
//Import router modules
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
//Import service
import { AuthService } from "./auth.service";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/operator/take";

@Injectable()
export class CanActivateAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.authState$
      .take(1)
      .map(authState => !!authState)
      .do(authenticated => {
        if (!authenticated) {
          this.router.navigate(["/login"]);
        }
      });
  }
}
