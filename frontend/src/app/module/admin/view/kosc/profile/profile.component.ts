import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../../../../controller/service/Token.service";
import {UserService} from "../../../../../controller/service/user.service";
import {User} from "../../../../../controller/model/User.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    private _user: User;
    showEdit=false;
    showChangePasword = false;
    editButton = true;
    private _oldPassword: string;
    private _newPassword: string;
    private _errorPassword =false;

    constructor(private tokenService:TokenService,private userService:UserService) { }

  ngOnInit(): void {
      this.CurrentUser();
  }

   CurrentUser(){
    const tokenDecoded = this.tokenService.decode();
    const username = tokenDecoded.sub;
    this.userService.findByUsername(username).subscribe(user =>{
        this._user=user;
        }
    )

  }
    showEditFunction() {
        this.showEdit = !this.showEdit;
        this.editButton =!this.editButton;
    }

    changePaswordDialog(etat:boolean) {
        this.oldPassword='';
        this.newPassword='';
        this._errorPassword=false;
        this.showChangePasword=etat;
    }

    ChangePasword() {
        console.log(this.user.password);
      if(this.user.password===this.oldPassword){
          this.user.password=this.newPassword;
          this.changePaswordDialog(false);
      }else{
        this.oldPassword='';
     this._errorPassword=true;
      }
    }

    updateUser() {
this.userService.update(this.user);
        this.showEditFunction();
    }



    //getters and setters


    get errorPassword(): boolean {
        return this._errorPassword;
    }

    set errorPassword(value: boolean) {
        this._errorPassword = value;
    }

    get user(): User {
        return this._user;
    }

    set user(value: User) {
        this._user = value;
    }

    get oldPassword(): string {
        return this._oldPassword;
    }

    set oldPassword(value: string) {
        this._oldPassword = value;
    }

    get newPassword(): string {
        return this._newPassword;
    }

    set newPassword(value: string) {
        this._newPassword = value;
    }
}
