import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  userForm: FormGroup;

  constructor(
    private service: UserService,
    private formBuilder: FormBuilder,
    private snack: MatSnackBar,
    private routerNavigate: Router) {

    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() { 
    if(this.userForm.valid) {
      this.service.createNewUser(this.userForm.value).subscribe(result =>{
        this.snack.open('User was created with success', 'close')
        this.routerNavigate.navigate([""]);
      }, err => {
        this.snack.open("Error: that email already inserted", 'close')
      })
    }
  }
}
