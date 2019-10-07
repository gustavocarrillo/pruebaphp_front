import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAddComponent } from "./user-add/user-add.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserListComponent } from "./user-list/user-list.component";
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
  { path: 'home',component: HomeComponent },
  { path: 'users/add',component: UserAddComponent },
  { path: 'users/edit/:id',component: UserEditComponent },
  { path: 'users/list',component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
