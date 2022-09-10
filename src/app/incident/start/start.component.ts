import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Incident } from 'src/app/Shared/Entities/Incident';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  @ViewChild('f') subjectForm!: NgForm;
  incident: Incident = new Incident();
  constructor() { }

  onSubmit(form: NgForm){
    const value = form.value;
    this.incident.name = value.name;
    console.log(this.incident.name);
    this.incident = new Incident();

    // this.subjectService.addSubject(this.subject);
    form.reset();
  }
  ngOnInit(): void {
  }

}
