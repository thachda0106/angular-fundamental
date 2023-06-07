import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() start = new EventEmitter<number>();
  count: number = 0;
  startInterval: ReturnType<typeof setInterval>;
  constructor() { }

  ngOnInit(): void {
  }

  onStarted() {
    this.startInterval = setInterval(() => {
      this.start.emit(++this.count);
    }, 1000);
  }

  onStopped() {
    clearInterval(this.startInterval);
  }
}
