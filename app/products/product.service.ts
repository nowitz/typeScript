import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

//COMMENT importy potrebny pro Observable
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IProduct } from './product';

@Injectable() //COMMENT anotace pro definovani service
export class ProductService {
    private _productUrl = 'api/products/products.json';

    constructor(private _http: Http) { }

    getProducts(): Observable<IProduct[]> {  //COMMENT metoda service, ktera vrati vsechny(pole) produkty
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]> response.json()) //COMMENT MAP - slouzi k prevodu(transformaci) hodnot, z response dostanem JSON objekty
            .do(data => console.log('All: ' +  JSON.stringify(data))) //COMMENT DO - pokud vse OK, provede se tahle metoda, slouzi napr. k logovani
            .catch(this.handleError); //COMMENT pokud neco spadnet tak vyjimka
    }

    getProduct(id: number): Observable<IProduct> { //COMMENT metoda, ktera na zaklade Id hodnoty vyhleda v poli pozadovany zaznam, ktery vrati
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id));
    }

    private handleError(error: Response) { //COMMENT definovani exception
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
