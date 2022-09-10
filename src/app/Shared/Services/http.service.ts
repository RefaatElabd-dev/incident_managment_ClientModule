import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

import { SharedValueService } from "src/app/Shared/Services/shared-value.service";
import { User } from "../Entities/User";
import { Incident } from 'src/app/Shared/Entities/Incident';

@Injectable({
    providedIn: 'root'
})
export class HttpService{
    
    constructor(private http: HttpClient, private sharedService: SharedValueService){}

    private baseApi: string = this.sharedService.configuration.apiURI;
    private incidentURL: string = this.baseApi + '/' + "Incident";
    private userURL: string = this.baseApi + '/' + "User";

    //User Section
    public getAllUsers(): Observable<User[]>{
        const uri: string = this.userURL;
        const token = this.sharedService.GetUserToken() ?? '';
        const header: HttpHeaders = new HttpHeaders().set('authorization', token);
        return this.http.get<User[]>(uri, { headers: header });
    }

    public addUser(user: User): Observable<any>{
        const uri: string = this.userURL;
        return this.http.post(uri, user);
    }

    public Login(user: User): Observable<any>{
        const uri: string = this.userURL + '/Login';
        return this.http.post(uri, user);
    }


    //IncidentSection
    getAllIncidents(): Observable<Incident[]> {
        const uri: string = this.incidentURL;
        return this.http.get<Incident[]>(uri);
    }

    updateIncident(incident: Incident) {
        const token = this.sharedService.GetUserToken() ?? '';
        const header: HttpHeaders = new HttpHeaders().set('authorization', token);
        debugger
        const uri: string = this.incidentURL + `/edit/${incident._id}`;
        return this.http.patch(uri, incident, {headers: header});
    }
}