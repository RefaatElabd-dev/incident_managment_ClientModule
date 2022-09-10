import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

import { SharedValueService } from "src/app/Shared/Services/shared-value.service";
import { User } from "../Entities/User";

@Injectable({
    providedIn: 'root'
})
export class HttpService{
    constructor(private http: HttpClient, private sharedService: SharedValueService){}

    private baseApi: string = this.sharedService.configuration.apiURI;
    private incidentURL: string = this.baseApi + '/' + "incident";
    private userURL: string = this.baseApi + '/' + "user";

    //User Section
    // public getSubjects(): Observable<SubjectDTO[]>{
    //     const uri: string = this.baseUri + '/GetAllSubjects';
    //     return this.http.get<SubjectDTO[]>(uri);
    // }

    public addUser(user: User): Observable<any>{
        const uri: string = this.userURL;
        return this.http.post(uri, user);
    }

    public Login(user: User): Observable<any>{
        const uri: string = this.userURL + '/Login';
        return this.http.post(uri, user);
    }

    // public updateSubject(subject: SubjectDTO): Observable<any>{
    //     const uri: string = this.baseUri;
    //     return this.http.patch(uri, subject);
    // }

    // public deleteSubject(index: number): Observable<any>{
    //     const uri: string = this.baseUri;
    //     return this.http.delete(uri, {
    //         params: new HttpParams().set('id', index)
    //     });
    // }

    // public getAllClasses(): Observable<ClassDTO[]>{
    //     const uri = this.baseApi + '/Class/GetAllClasses';
    //     return this.http.get<ClassDTO[]>(uri);
    // }
}