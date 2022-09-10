import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/Shared/Entities/User';
import { UserService } from './../../Shared/Services/user.service';
import { IncidentService } from './../../Shared/Services/incident.service';
import { Incident } from 'src/app/Shared/Entities/Incident';

@Component({
  selector: 'app-user-selector',
  templateUrl: './user-selector.component.html',
  styleUrls: ['./user-selector.component.css']
})
export class UserSelectorComponent implements OnInit {
  @ViewChild('usersGroup') usersGroup!: ElementRef;
  @Input() incident: Incident = new Incident();
  userList: User[] = [];
  constructor(private userService: UserService,
              private incidentService: IncidentService) { }

  ngOnInit(): void {
    this.userService.getAllUsers();
    this.userService.userListChanged.subscribe((users: User[]) => {
      this.userList = users;
    })
  }

  onSelected(){
    let selectedUserId = this.usersGroup.nativeElement.value;
    this.incidentService.attachIncidentToUser(this.incident, selectedUserId);
  }
}
