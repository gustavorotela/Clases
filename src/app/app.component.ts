import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'GustavoRotela';
  edadUno:any;
  edadDos:any;
  promedio:any;

  constructor(){}

  Promedio()
  {
    this.promedio = (this.edadUno + this.edadDos) / 2;
  }

  Limpiar()
  {
    this.edadUno = '';
    this.edadDos = '';
  }
}
