# SECCION 4.

### 45. Estructura del proyecto

Creamso los componenetes home y navbar.

![Seccion4_1.jpg](C:/Users/tomas.prat/Google Drive/tutoriales/20180612angularUdemyFernandoHerrera/apuntes/imagenes/Seccion4_1.jpg "Creamos componentes home y navbar")

### 46. Instalando bootstrap cuando usamos angular cli.

**Instalar librerias**

* Insertando en el html los scripts (online). Los scripts suelen ir al final.

```xml
<body>
<app-root></app-root>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
</body>
```


*  Descargando las librerias y poniendola en assets cada una bootstrap, pooper, jquery. (local)

```xml
<head>
  <meta charset="utf-8">
  <title>Spa</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="stylesheet" href="./assets/libs/bootstrap/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

</head>
```

* Instalando el paquete mediante NPM.

>npm install bootstrap --save
>npm install jquery --save
>npm install popper.js --save (popper libreria par ala ubicaci�nd e componentes)


Lo instala dentro los modulos de la aplicaci�n. Despu�s es necesario configurar desde **angular.json**. Inconveniente de este sistema, se

```xml
            "styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.slim.min.js",
              "node_modules/popper.js/dist/umd/popper.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
          },
         
```

### 47.Configurando el navbar

Creamos componentes about y heroes. Para crear componentes sin hoja de estilos:


>ng g components/nombre -is


### 48.Rutas en angular

Dentro de la carpeta app se crea el archivo app.routes.ts

```xml
import { HomeComponent } from './components/home/home.component';

import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true} );
```



Despues hay que a�adir APP_ROUTING
 en app.module.ts
 
>Si se van a utilizar rutas con hash, hay que a�adir usehash:true:

>export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true} ); 

Finalmente en app.component.html hay que poner router-outlet:
```xml
<app-navbar></app-navbar>

<div class="container">

  <router-outlet></router-outlet>
</div>
```



### 49. RouterLink y RouterLinkActive


RouterLink, si se quiere una ruta m�s larga en el array s eponen m�s items:

```xml
        <a class="nav-link" [routerLink] = "['home']">Home <span class="sr-only">(current)</span></a>

```
 
RouterLinkActive, para resaltar la clase:

```xml
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" routerLinkActive = "active">
        <a class="nav-link" [routerLink] = "['home']">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item" routerLinkActive = "active">
        <a class="nav-link" [routerLink] = "['heroes']">Heroes</a>
      </li>
      <li class="nav-item" routerLinkActive = "active">
        <a class="nav-link" [routerLink] = "['about']">About</a>
      </li>
```

### 50. Componente heroe. Diseño

### 51. Introduccion a los servicios

### 52 Primer servicio

Se crea un servicio components/services/heroes.service.ts.

```xml
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

 constructor() {
   console.log('Servicio listo para usarse');
 }
}
```

Se añade a app.module.ts en providers el servicio.

```xml
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

  private heroes: any =
  [
    {
      nombre: 'Aquaman',
      bio: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/aquaman.png',
      aparicion: '1941-11-01',
      casa: 'DC'
    },
{
  nombre: 'Batman',
  bio: 'Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.',
  img: 'assets/img/batman.png',
  aparicion: '1939-05-01',
  casa: 'DC'
},
{
  nombre: 'Daredevil',
    bio: 'Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \'ver\' a través de un \'sexto sentido\' que le sirve como un radar similar al de los murciélagos.',
  img: 'assets/img/daredevil.png',
  aparicion: '1964-01-01',
  casa: 'Marvel'
},
{
  nombre: 'Hulk',
    bio: 'Su principal poder es su capacidad de aumentar su' +
    ' fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su' +
    ' furia. Dependiendo de qué personalidad de Hulk esté al mando en' +
    ' ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).',
  img: 'assets/img/hulk.png',
  aparicion: '1962-05-01',
  casa: 'Marvel'
},
{
  nombre: 'Linterna Verde',
    bio: 'Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)',
  img: 'assets/img/linterna-verde.png',
  aparicion: '1940-06-01',
  casa: 'DC'
},
{
  nombre: 'Spider-Man',
  bio: 'Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \'sentido arácnido\', que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.',
  img: 'assets/img/spiderman.png',
  aparicion: '1962-08-01',
  casa: 'Marvel'
},
{
  nombre: 'Wolverine',
  bio: 'En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.',
  img: 'assets/img/wolverine.png',
  aparicion: '1974-11-01',
  casa: 'Marvel'
}
];

constructor() {
   console.log('Servicio listo para usarse');
 }
 getHeroes(): any {
  return this.heroes;
 }
}

```


> ngOnInit() se ejecuta una vez renderizada la página, después del constructor

```xml
import { Component, OnInit } from '@angular/core';
import {Heroe, HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService) {

  }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();

    console.log(this.heroes);
  }

}


```

### 53. Pagina de heroes -Diseño con *ngFor

### 54 Rutas por parametros. Router y activatedRoute

En el archivo app.module.ts creamos una nueva ruta:

>  { path: 'infoheroe/:id', component: InfoheroeComponent },

ponemos un parámetro con /:nombreparametro

Desde el html:

>  <a [routerLink]="['/infoheroe', i ]" href="#" class="btn btn-> outline-primary"> Leer mas...</a>

Mediante código de programación:

Creamos una funcion y la llamamos desde el html:

>    <button (click)="verHeroe(i)" type="button" class="btn btn-outline-primary btn-block">Ver mas</button>

en el archivo typescript:

>  verHeroe(i: number) {
> 
>     this._router.navigate(['/infoheroe', i]);
>   }


### 55. Recibiendo parametros por URL ActivatedRoute

```xml
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-infoheroe',
  templateUrl: './infoheroe.component.html',
  styleUrls: ['./infoheroe.component.css']
})
export class InfoheroeComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) {

    this._activatedRoute.params.subscribe(params => console.log(params['id']) );
  }

  ngOnInit() {
  }

}
  }
```

