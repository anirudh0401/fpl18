import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from './Globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  isAuthenticated: any;
  constructor(private globals: Globals) {
  }

}