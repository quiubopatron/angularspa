import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-infoheroe',
  templateUrl: './infoheroe.component.html',
  styleUrls: ['./infoheroe.component.css']
})
export class InfoheroeComponent implements OnInit {
  heroe: any = {};
  ids: string;

  constructor(private _activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {
    this._activatedRoute.params.subscribe(params => this.ids = params['id'] ) ;
    this.heroe = this._heroesService.getHeroe(this.ids);
  }

  ngOnInit() {
  }

}
