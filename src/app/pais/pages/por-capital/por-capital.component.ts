import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  constructor(private paisService: PaisService) { }

  hayError: boolean = false;
  termino: string = '';
  paises: Country[] = [];

  buscar(termino: string) {

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino, 'capital')
      .subscribe((paises) => {
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }
}
