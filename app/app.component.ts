import { Component } from '@angular/core';

@Component({
    selector: 'pm-app', //COMMENT nazev HTML elementu -> pouzito v index.html
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                <!-- COMMENT pokud kliknu na odkaz, zmeni mi to URL (partyboard.cz/product), pricemz RouterModule(app.module.ts) mi detekuje tu URL a nasledne nacte pozadovanou komponentu-->
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/products']">Product List</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet> <!-- COMMENT do tohoto elementu se mi vlozi konkretni komponenta definovana dle URL a routru -->
        </div>
     </div>
     ` //COMMENT HTML kod se da nahradit templateUrl: -> odkaz na HTML soubor
})
export class AppComponent {
    //COMMENT promenna typu string, pres expression language(EL) se s ni da pracovat v HTML kodu pres {{pageTitle}}
    pageTitle: string = 'Acme Product Management';
}
