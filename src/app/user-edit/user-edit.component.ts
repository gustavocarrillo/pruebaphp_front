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

  constructor(private UserService: UsersService, private ActivatedRoute: ActivatedRoute) { }

  id = this.ActivatedRoute.snapshot.params.id;

  ngOnInit() {
    this.UserService.getUser(this.id).subscribe(
        data =>{
          console.log('DATA',data)
          this.user = data
        },
        error => console.log('ERROR',error)
    )
  }

}
