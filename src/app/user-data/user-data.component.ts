import { devOnlyGuardedExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserAPiService } from '../shared/user-api.service';
import { UserModel } from './userData.model';


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  formValue!:FormGroup;
  userObj:UserModel = new UserModel();
  userData : any = [];
  showData !:boolean;
  panelOpenState = false;

  constructor( private fromBuilder : FormBuilder , private userApi : UserAPiService) { }

  ngOnInit(): void {

    this.formValue = this.fromBuilder.group({
      name:[''],
      email:[''],
      phone:[''],
      address:['']
    })
    this.getAllUSers();
  }

  show(){
    this.showData = true
  }

  getAllUSers(){
    this.userApi.getUserData().subscribe(res=>{
      this.userData = res;
      console.warn(this.userData);

    })
  }

  postUser(){
    this.userObj.name = this.formValue.value.name;
    this.userObj.email = this.formValue.value.email;
    this.userObj.phone = this.formValue.value.phone;
    this.userObj.address = this.formValue.value.address;

    this.userApi.postUserData(this.userObj)
    .subscribe(res=>{
      console.warn(res);
      alert("User Added Successfully")
      let ref = document.getElementById('cancle')
      ref?.click();
      this.formValue.reset();
      this.getAllUSers();
    },
    err=>
    alert("Something is Worng")
    )
  }





  deleteUser(id:any){
    this.userApi.deleteUserData(id).subscribe(res=>{
      console.warn(res);
      this.getAllUSers();
      alert("user deleted");
    },
    err=>{
      alert('cannot delete user')
    }
    )
  }

}
