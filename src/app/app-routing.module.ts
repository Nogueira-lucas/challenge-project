import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { UpdateUserModalComponent } from './pages/update-user-modal/update-user-modal.component';
import { UserReaderComponent } from './pages/user-reader/user-reader.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "create",
    component: CreateUserComponent
  },
  {
    path: "update/:id",
    component: UpdateUserModalComponent
  },
  {
    path: "view/:id",
    component: UserReaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
