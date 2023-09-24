import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserFull } from 'src/app/model/user.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-reader',
  templateUrl: './user-reader.component.html',
  styleUrls: ['./user-reader.component.scss']
})
export class UserReaderComponent {
  userForm: FormGroup;
  id: string = "";
  userData$?: Observable<UserFull>;

  constructor(
    private param: ActivatedRoute,
    private service: UserService,
    private formBuilder: FormBuilder,
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
}
