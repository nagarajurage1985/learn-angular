import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()

export class LoginGuardService implements CanActivate
{

    constructor(private _router: Router)
    {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean
    {
        console.log(route.paramMap.get("title"));

        var productType = route.paramMap.get("title");
        if(productType == "Other")
        {
            this._router.navigate(['pagenotfound']);
            return false;
        }
        return true;
    }


}