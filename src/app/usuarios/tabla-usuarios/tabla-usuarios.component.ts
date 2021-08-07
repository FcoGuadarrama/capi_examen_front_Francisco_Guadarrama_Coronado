import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../Services/users.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  users: any

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {

    this.usersService.getUsers().pipe(first()).subscribe(gases => {
      this.users = gases;
    });
  }

}
