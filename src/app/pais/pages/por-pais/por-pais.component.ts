import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent {

  hayError: boolean = false;
  termino: string = '';
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino, 'name')
      .subscribe((paises) => {
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(termino: string) {

    this.termino = termino;
    this.hayError = false;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino, 'name')
      .subscribe(
        paises => this.paisesSugeridos = paises.splice(0, 5),
        (err) => this.paisesSugeridos = []
      )

  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
    this.mostrarSugerencias = false;
  }


}
