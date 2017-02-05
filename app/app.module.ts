//COMMENT jednotlive moduly a knihovny musi mit import aby byli dostupny(viditelny)
import { NgModule } from '@angular/core'; //COMMENT slouzi pro obousmerny binding [(ngModel)] je soucasti FormsModule
import { BrowserModule } from '@angular/platform-browser'; //COMMENT slouzi pro *ngFor a *ngIf mel by vsak byt pouze na root module(AppModule), *ngFor a *ngIf obsahuje i CommponModule
import { HttpModule } from '@angular/http'; //COMMENT HTTP modul - GET,POST, atd.
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';

/* Feature Modules */
import { ProductModule } from './products/product.module'; //COMMENT import definice modulu pro produkty

@NgModule({
  imports: [ //COMMENT deklarace importovanych modulu, jak vlastnich tak externich
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([  //COMMENT po vyhodnoceni AppComponent dojde k definovani root komponenty na zaklade URL
      { path: 'welcome', component: WelcomeComponent },//COMMENT pouziva se pro definovani URL stranky stranky partyboard.cz/welcome
      { path: '', redirectTo: 'welcome', pathMatch: 'full' }, //COMMENT pouziva se pro defaultni(welcome) stranku partyboard.cz
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' } //COMMENT pouziva se napriklad pro error 404, co se ma udelat kdyz nenalezne stranku
    ]),
    ProductModule
  ],
  declarations: [ //COMMENT deklarace komponent(component), directive, pipe(transformatoru hodnot), kazda component, directive, pipe muze byt deklarovana pouze v 1 modulu ze vsech modulu v cele aplikaci
    AppComponent,
    WelcomeComponent //COMMENT uvodni komponenta
  ],
  bootstrap: [ AppComponent ] //COMMENT definovani root(pocatecni) komponenty, ktera je vychozim bodem aplikace
})
export class AppModule { }
