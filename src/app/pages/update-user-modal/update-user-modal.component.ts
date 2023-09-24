import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { UserFull, UserResponseInterface } from 'src/app/model/user.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-update-user-modal',
  templateUrl: './update-user-modal.component.html',
  styleUrls: ['./update-user-modal.component.scss']
})
export class UpdateUserModalComponent implements OnInit {
  userForm: FormGroup;
  id: string = "";
  userData$?: Observable<UserFull>;

  constructor(
    private param: ActivatedRoute,
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

  ngOnInit(): void {
    this.param.paramMap.subscribe(params => {
      this.id = params.get('id') || "";
      console.log(this.id);     
      this.userData$ = this.service.getUsersBy(this.id)
    });
    this.initForm()
  }

  initForm() {
    this.userData$?.subscribe(result => {
      this.userForm = this.formBuilder.group({
        id: [result.id],
        firstName: [result.firstName, Validators.required],
        lastName: [result.lastName, Validators.required],
        email: [result.email, [Validators.required, Validators.email]]
      });
    })
  }

  onSubmit() { 
    if(this.userForm.valid) {
      this.service.updateUser(this.userForm.value).subscribe(result =>{
        this.snack.open('User was updated with success', 'close')
        this.routerNavigate.navigate([""]);
      }, err => {
        this.snack.open("Error on update", 'close')
      })
    }
  }
}
