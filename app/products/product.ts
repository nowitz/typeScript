//COMMENT definice entity Produkt, shlouzi hlavne pro prehlednost a validaci kodu, abychom nemuseli pouzivat u deklarace ANY
export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}

