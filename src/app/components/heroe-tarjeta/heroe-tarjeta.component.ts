import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  @Input()
  heroe: any  = {};

  @Input()
  index: number;

  @Input()
  prueba: string;

  @Output()
  heroeSeleccionado: EventEmitter<number>;



  constructor(private _router: Router) {
    this.heroeSeleccionado = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  verHeroe(i) {
    //   console.log(this.index);
    // this._router.navigate(['/infoheroe', this.index]);

    this.heroeSeleccionado.emit(this.index);

  }
}
