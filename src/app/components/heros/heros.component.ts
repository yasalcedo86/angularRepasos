import { Component, OnInit } from '@angular/core';
import { ChampionsService } from '../../services/champions.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  a: string[] = ['1', '2', '3'];
  heros: any[] = [];

  constructor( private championsService: ChampionsService ) {

   }

  ngOnInit(): void {
    this.heros = this.championsService.getHeroes();
  }

}
