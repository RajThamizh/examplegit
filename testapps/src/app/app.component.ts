import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  name:String;
  constructor() {
    this.title = 'Spring Boot - Angular Application';
    this.name="Thamizh";
  }
}