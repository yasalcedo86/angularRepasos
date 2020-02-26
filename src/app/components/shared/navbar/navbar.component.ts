import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { ChampionsService, Heroe } from '../../../services/champions.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  heros: Heroe[] = [];
  constructor( private championsService: ChampionsService,
               private activatedRoute: ActivatedRoute,
               private router: Router) { }

  ngOnInit(): void {

  }
  buscarHero(termino: string) {
      this.router.navigate( ['/buscar', termino] );
  }
  // buscarHero(value: string) {
  //   this.heros = this.championsService.buscarHero(value);
  //   console.table(this.heros);
  // }

}
