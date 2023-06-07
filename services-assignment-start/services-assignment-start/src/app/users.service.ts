import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  activeUsers: Array<string> = ['Max', 'Anna'];
  inactiveUsers: Array<string> = ['Chris', 'Manu'];

  constructor() { }

  setInActiveUser(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  setActiveUser(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
