import { Component, OnInit } from '@angular/core';
import { ChampionsService, Heroe } from '../../services/champions.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heros: Heroe[] = [];

  constructor( private championsService: ChampionsService,
               private router: Router
    ) {

  }

  ngOnInit(): void {
    this.heros = this.championsService.getHeroes();
  }

  verHeroe(index){
    this.router.navigate( ['/hero', index] );
  }

}
