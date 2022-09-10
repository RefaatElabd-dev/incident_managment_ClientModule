import { Injectable } from "@angular/core";

@Injectable()
export class AuthService{
    private _loggedIn: boolean = false;

    isAuthenticated(){
        const promise = new Promise<boolean>(
            (resolve, reject) => {
                setTimeout(() =>{resolve(this._loggedIn)}, 800)
            }
        );

        return promise;
    }

    Login(){
        this._loggedIn = true;
    }

    Logout(){
        this._loggedIn = false;
    }
}
