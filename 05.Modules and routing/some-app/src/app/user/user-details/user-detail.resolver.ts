import {  Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { User } from "../types/User";
import { Observable } from "rxjs";
import { UserService } from "../user.service";

@Injectable({providedIn:'root'})
export class UserResolver implements Resolve<User>{

    constructor(private userService: UserService){}

    resolve(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): 
        User | Observable<User> | Promise<User> 
        {
        
            const id = route.params['id'];
            return this.userService.getSingleUser(id)
    }
    
}