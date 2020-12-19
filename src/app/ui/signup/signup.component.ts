import { UserService } from './../../models/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  form:FormGroup;
  isSubmitted : boolean = false;
  errorMEssage : string;
  emailExist : boolean = false;
  emailExistErrorMessage : string ;
  constructor(private userService:UserService, private fb:FormBuilder, private route:Router) {
    this.form = fb.group({
      name:['', Validators.required],
      surName:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required]
    });
  }
  get name(): any {
    return this.form.get('name');
  }
  get surName(): any {
    return this.form.get('surName');
  }
  get email(): any {
    return this.form.get('email');
  }
  get password(): any {
    return this.form.get('password');
  }
  createUser(){
    let userArray : string[];
    this.userService.getUsers().subscribe(users =>{
      userArray = users.map(u => u.email);
     // console.log(userArray);
      this.emailExist = userArray.includes(this.form.value.email);
    //console.log(this.emailExist);
    }); 
    
    this.isSubmitted = true;
    if(this.form.valid){
      if(!this.emailExist){
      let user : User = {
        id: this.generateId(),
        name: this.form.value.name,
        surName:this.form.value.surName,
        email: this.form.value.email,
        password: this.form.value.password,
        adminLevel:false
      }
      console.log(user);
     // this.userService.saveUser(user).subscribe(user => console.log(user));
      }
      else{
        this.emailExistErrorMessage = "This email already exists!"
      }
    }
    else{
      this.errorMEssage = "Invalid inputs submitted! Please check each field carefully"
    }

  }

  generateId():string{
    return '_'+ Math.random().toString(36).substr(2,9);
  }

}
