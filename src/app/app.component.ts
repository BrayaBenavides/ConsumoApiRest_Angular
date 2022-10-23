import { Component, OnInit } from '@angular/core';
import { RadicadoService } from './services/radicado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private radicadoService: RadicadoService){}

    ngOnInit(): void {
      console.log('El componente se ha inicializado');
      this.radicadoService.getAllRadicado()
      

    }
  }

