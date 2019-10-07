import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: any = {};
  msj: any = null;

  constructor(private Users: UsersService, private ActivatedRoute: ActivatedRoute) { }

  id = this.ActivatedRoute.snapshot.params.id;

  reset() {
     this.user = {};
  }

  edit() {
      this.Users.updateUser(this.id, this.user).subscribe(
          msj => {
              console.log('MSJ', msj);
              this.msj = msj;
              setTimeout(() => {
                    this.msj = null;
                    // this.data = {};
                  }, 3000);
            },
            error => console.log('ERROR', error));
    }

  ngOnInit() {
    this.Users.getUser(this.id).subscribe(
        data => {
          console.log('DATA', data);
          this.user = data;
        },
        error => console.log('ERROR', error)
    );
  }

}
