import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../Shared/Entities/User';
import { UserService } from '../Shared/Services/user.service';
import { Incident } from './../Shared/Entities/Incident';
import { IncidentService } from './../Shared/Services/incident.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  incidentList: Incident[] = []
  userList: User[] = []

  constructor(private incidentService: IncidentService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers();
    this.userService.userListChanged.subscribe((users: User[]) => {
      this.userList = users;
    })

    this.incidentService.getAllIncidents();
    this.incidentService.incidentListChanged.subscribe((incidents: Incident[]) => {
      this.incidentList = incidents
    })
  }

  GetUserName(userId: string): string{
    let user: User = this.userList.find(u => u._id == userId) ?? new User();
    return user.username;
  }
}
