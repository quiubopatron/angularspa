import { Component, OnInit } from '@angular/core';
import {Heroe, HeroesService} from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  prueba: string = 'ueppp';

  constructor(private _heroesService: HeroesService, private _router: Router) {

  }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();

    console.log(this.heroes);
  }

  verHeroe(i: number) {

    this._router.navigate(['/infoheroe', i]);
  }
}
