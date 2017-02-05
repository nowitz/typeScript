import {  PipeTransform, Pipe } from '@angular/core';
import { IProduct } from './product';

@Pipe({ //COMMENT nedinovani nazvu transformace
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform { //COMMENT implementace rozhrani PipeTransform, obsahuje metodu transform() pro transformaci dat

    transform(value: IProduct[], filterBy: string): IProduct[] {  //COMMENT 1.parametr = co chcem transformovat, 2. co nam transformaci ovlivni a pak je definovana navratova hodnota(v tomhle pripade pole Produktu)
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null //COMMENT vyhodnoceni, zda neni parametr null
        return filterBy ? value.filter((product: IProduct) =>  //COMMENT pokud neni null tak dojde k filtraci, pokud je null, vrati se cely seznam produktu
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value; //COMMENT indexOf je neco naco contains v JAVE - snazi se v poli najit pozadovanou hodnotu
    }
}
