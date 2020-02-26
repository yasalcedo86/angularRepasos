import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { Heroe, ChampionsService } from '../../services/champions.service';



@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {

  hero: Heroe;

  constructor( private activatedRoute: ActivatedRoute,
               private championsService: ChampionsService) {

    this.activatedRoute.params.subscribe( parametros => {

      this.hero = this.championsService.getHero(parametros['id']);
      console.table(this.hero);
    });


  }

  ngOnInit(): void {
  }

}
