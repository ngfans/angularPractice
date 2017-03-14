import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
<h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero }}
      </li>
    </ul>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroes[0];

  constructor() { }

  ngOnInit() {
  }

}
