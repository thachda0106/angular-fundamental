import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: string[];

  constructor(private userServices: UsersService){
    this.users = userServices.activeUsers;
  }
  onSetToInactive(id: number){
    this.userServices.setInActiveUser(id);
    this.users = this.userServices.activeUsers;
  }
}
