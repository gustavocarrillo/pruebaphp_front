import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  constructor(private Users: UsersService) { }
  data: any = {};
  add() {
    this.Users.setUser(this.data).subscribe(
      msj => console.log('MSJ', msj),
      error => console.log('ERROR', error));
  }

  ngOnInit() {
  }

}
