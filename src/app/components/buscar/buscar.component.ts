import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChampionsService,Heroe } from 'src/app/services/champions.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  heros: Heroe[];
  constructor( private activatedRoute: ActivatedRoute,
               private championsService: ChampionsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( parametros => {
      this.buscarHero( parametros['termino'] );
    });
  }

  buscarHero(value: string) {
      this.heros = this.championsService.buscarHero(value);
      console.table(this.heros);
    }
}
