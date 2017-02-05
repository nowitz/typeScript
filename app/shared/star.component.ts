import { Component, OnChanges, Input,
         Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star', //COMMENT definovani HTML elementu
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges { //COMMENT implementace rozhrani OnChanges, obsahuje metodu ngOnChanges(), ktera se vola vzdy pri zmene vstupni hodnot
    @Input() rating: number; //COMMENT definovani vstupniho parametru
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();  //COMMENT deklarace vystupniho parametru

    ngOnChanges(): void { //COMMENT metoda interfacu OnChanges
        // Convert x out of 5 starts
        // to y out of 86px width
        this.starWidth = this.rating * 86 / 5;
    }

    onClick(): void { //COMMENT metoda, ktera se zavola po kliknuti na hvezdicky(div) a vrati pozadovanou hodnotu do ratingClicked
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`); //COMMENT vlozeni hodnoty prommeny do retezce
    }
}
