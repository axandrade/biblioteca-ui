import { Usuario } from './components/login/usuario';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'biblioteca-ui';

  mostrarMenu: boolean = false;

  constructor() { }

}


