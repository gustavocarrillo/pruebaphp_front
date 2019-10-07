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
  msj: any = null;
  add() {
    this.Users.setUser(this.data).subscribe(
      msj => {
        console.log('MSJ', msj);
        this.msj = msj;
        setTimeout(() => {
          this.msj = null;
          this.data = {};
        }, 3000);
      },
      error => console.log('ERROR', error));
  }
  reset() {
    this.data = {};
  }

  ngOnInit() {
  }

}
