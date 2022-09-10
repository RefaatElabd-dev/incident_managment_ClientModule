import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Incident } from "../Entities/Incident";
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class IncidentService{
    
    constructor(private http: HttpService){ }
    incidentList: Incident[] = [];
    incidentListChanged = new Subject<Incident[]>();

    getAllIncidents(){
        this.http.getAllIncidents().subscribe((res: Incident[]) => {
            this.incidentList = res;
            this.incidentListChanged.next(this.incidentList.slice());
        })
    }

    attachIncidentToUser(incident: Incident, selectedUserId: string) {
        incident.userId = selectedUserId;
        this.http.updateIncident(incident).subscribe(() => {
            let newIncedent = this.incidentList.find(inc => inc._id == incident._id);
            newIncedent = incident;
            this.incidentListChanged.next(this.incidentList.slice());
        });
      }
}