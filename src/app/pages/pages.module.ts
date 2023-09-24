import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeComponent } from './home/home.component';
import { DeleteUserModalComponent } from './delete-user-modal/delete-user-modal.component';
import { UpdateUserModalComponent } from './update-user-modal/update-user-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from '../app-routing.module';
import { UserReaderComponent } from './user-reader/user-reader.component';


@NgModule({
  declarations: [
    CreateUserComponent,
    HomeComponent,
    UpdateUserModalComponent,
    UserReaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DeleteUserModalComponent,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatDividerModule,
    MatRippleModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    DeleteUserModalComponent
  ]
})
export class PagesModule { }
