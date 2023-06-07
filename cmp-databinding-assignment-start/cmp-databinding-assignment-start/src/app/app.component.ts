import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countList = [];

  onStart(countNumber:number) {
    this.countList.push(countNumber);
  }
}
