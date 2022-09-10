import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SharedValueService{
    constructor(){

    }

    private _userToken = '';

    public SetUserToken = (token: string) => {
        localStorage.setItem('_tk', this.encrypt(token));
    }

    public GetUserToken = (): string | null => {
        let tk: string | null = localStorage.getItem('_tk');
        if(tk)
          return this.decrypt(localStorage.getItem('_tk') ?? '');
        
          return null;
    }

    private encrypt(token: string): string {
        let tkn: string = '';
        for(let i = 0; i < token.length; i++){
            tkn += token[i] + (i%9) + token[i]
        }
        return tkn;
    }
    
    private decrypt(tkn: string): string {
        let token: string = '';
        for(let i = 0; i < token.length; i += 3){
            token += tkn[i];
        }
        return token;
    }

    public clear(){
        localStorage.clear();
    }
    

    public configuration = {
        apiURI: ''
    }
}

