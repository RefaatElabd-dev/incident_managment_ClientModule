import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";
import { User } from "../Entities/User";
import { AuthService } from "./auth.Service";

import { HttpService } from "./http.service";
import { SharedValueService } from "./shared-value.service";

@Injectable({
    providedIn: 'root'
})
export class UserService{
   
    constructor(private http: HttpService,
                private toastr: ToastrService,
                private sharedService: SharedValueService,
                private authService: AuthService,
                private router: Router){ }

    userList: User[] = [];
    currentUser!: User;
    userListChanged = new Subject<User[]>();

    // public getUserList(): User[]{
    //     return this.userList.slice();
    // }

    // public UpdateUserList(){
    //     this.http.getUserss().subscribe(users =>{
    //             this.userList = users;
    //             this.userListChanged.next(this.userList.slice())});
    // }

    // getSubjectOf(index: number): SubjectDTO {
    //     let subject = this.subjectList.find(s => s.id == index);
    //     if(subject != undefined)
    //         return subject;
    //     else 
    //         return this.subjectList[0];
    // }

    addUser(user: User){
        this.http.addUser(user).subscribe((res) =>{
                // this.UpdateUserList();
                console.log(res)
            }
        )
    }

    Login(user: User){
        this.http.Login(user).subscribe((res: User) =>{
                // this.UpdateUserList();

                this.currentUser = res;
                this.sharedService.SetUserToken(this.currentUser?.token);
                this.toastr.success("Login Successfully !");
                this.authService.Login();
                if(this.currentUser.role === 'admin'){
                    this.router.navigate(['/Admin'])
                }
                else {
                    this.router.navigate(['/User'])
                }
            }
        )
    }

    // updateSubject(subject: SubjectDTO){
    //     this.subjectHttpService.updateSubject(subject).subscribe(() =>{
    //             this.UpdateSubjectList();
    //         }
    //     )
    // }

    // deleteSubject(index: number){
    //     this.subjectHttpService.deleteSubject(index).subscribe(() =>{
    //             this.UpdateSubjectList();
    //         }
    //     )
    // }

    // public getAllClasses(): Observable<ClassDTO[]>{
    //     return this.subjectHttpService.getAllClasses();
    // }
}