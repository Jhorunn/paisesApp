import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRout: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {

    this.activatedRout.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPisPorAlpha(id)),
        tap()
      )
      .subscribe(pais => {
        this.pais = pais;
      });

  }

}
