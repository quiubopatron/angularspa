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
>npm install popper.js --save (popper libreria par ala ubicaciónd e componentes)


Lo instala dentro los modulos de la aplicación. Después es necesario configurar desde **angular.json**. Inconveniente de este sistema, se

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



Despues hay que añadir APP_ROUTING
 en app.module.ts
 
>Si se van a utilizar rutas con hash, hay que añadir usehash:true:

>export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true} ); 

Finalmente en app.component.html hay que poner router-outlet:
```xml
<app-navbar></app-navbar>

<div class="container">

  <router-outlet></router-outlet>
</div>
```



### 49. RouterLink y RouterLinkActive


RouterLink, si se quiere una ruta más larga en el array s eponen más items:

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





