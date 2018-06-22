import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes: any [] = [];
  termino: string = '';

  constructor(private _activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {
  }

  ngOnInit() {

    this._activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      this.termino = params['termino'];
      console.log(this.heroes);
    });

  }
}
