import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public count = 0;

  public increment(count: number, incrementStep: number): void {
    this.count = count + incrementStep;
  }
}
