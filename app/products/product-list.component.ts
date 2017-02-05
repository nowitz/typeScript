import { Component, OnInit }  from '@angular/core';

import { IProduct } from './product';  //COMMENT import Interfacu -> definuje mi strukturu entity (neco mezi modelem a interfacem v JAVE, muze mit taky definovamy metody)
import { ProductService } from './product.service'; //COMMENT import service, slouzi pro simulaci vytazeni hodnot ze serveru pres GET

@Component({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'] //COMMENT definovani CSS souboru pro komponentu
})
export class ProductListComponent implements OnInit { //COMMENT implementace rozhrani OnInit, obsahuje metodu ktera se vola vzdy pri nacteni stranky
    //COMMENT dekarace promennych
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    products: IProduct[]; //COMMENT poutizi interface product

    constructor(private _productService: ProductService) { //COMMENT konstruktor, ktery v sobe obsahuje ProductService

    }

    toggleImage(): void { //COMMENT deklarace metody
        this.showImage = !this.showImage;
    }

    ngOnInit(): void { //COMMENT metoda interfacu OnInit
        this._productService.getProducts()
                .subscribe(products => this.products = products, //COMMENT asynchroni pozadavek na data, po dotazeni dat se zavola metoda subscribe, 1. parametr = pozadovane hodnota, kdyz je vse OK
                           error => this.errorMessage = <any>error); //COMMENT 2.parametr = errory kdyz je neco spatne, 3. parametr muze byt metoda, ktera se zavola kdyz je vse OK napr. ()=>this.toggleImage()
    }

    onRatingClicked(message: string): void { //COMMENT metoda se vstupni parametrem, ktery je definovanej v komponente <ai-start> jako $event(v tomto pripade se jedna o string)
        this.pageTitle = 'Product List: ' + message;
    }
}
