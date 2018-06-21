import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Heroe, HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-infoheroe',
  templateUrl: './infoheroe.component.html',
  styleUrls: ['./infoheroe.component.css']
})
export class InfoheroeComponent implements OnInit {
  heroe: Heroe;
  ids: string;
  urlCompany: string;

  constructor(private _activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {
    this._activatedRoute.params.subscribe(params => this.ids = params['id'] ) ;
    this.heroe = this._heroesService.getHeroe(this.ids);
    switch (this.heroe.casa.toString()) {
      case 'DC':
        this.urlCompany = './../../../assets/img/dc.jpg';
        console.log(this.urlCompany);
        break;
      case 'marvel':
        this.urlCompany = './../../../assets/img/marvel.png';
        break;
    }
  }

  ngOnInit() {
  }

}
