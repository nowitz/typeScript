import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-guard.service';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule, //COMMENT deklarace(nadefinovani) modulu(komponenta s hvezdickama), ktery dava k dispozici pouze to co exportuje
    RouterModule.forChild([  //COMMENT protoze nesmisme ve vice modulech importovat stejnej modul, tak u RouterModule existuje funkce forChild, ktera sjednoti hodnoty s forRoot(AppModule)
      { path: 'products', component: ProductListComponent },
      //COMMENT aktivuje se pri URL s parametrem (partyboard.cz/product/10), zaroven ma "strazce" ProductDetailGuard, ktery vyhodnoti parametr
      { path: 'product/:id',  canActivate: [ ProductDetailGuard],
        component: ProductDetailComponent }
    ])
  ],
  declarations: [ //COMMENT deklarace(nadefinovani) komponent
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe
  ],
  providers: [ //COMMENT deklarace(nadefinovani) services
    ProductService,
    ProductDetailGuard
  ]
})
export class ProductModule {}
