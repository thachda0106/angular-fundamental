import { UsersService } from './../users.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[];
  constructor(private userServices: UsersService){
    this.users = userServices.inactiveUsers;
  }
  onSetToActive(id: number){
    this.userServices.setActiveUser(id);
    this.users = this.userServices.inactiveUsers;
  }
}
