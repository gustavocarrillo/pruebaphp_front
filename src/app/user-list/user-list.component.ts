import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any = [];

  constructor(protected UsersService: UsersService) { }

  ngOnInit() {
    this.UsersService.getAll().subscribe(
        data => {
          console.log('DATA',data)
          this.users = data;
        },
        error => {
          console.log('Error en HTTP: ',error)
        }
    )
  }

}
