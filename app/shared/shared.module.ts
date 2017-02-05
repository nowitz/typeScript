import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common'; //COMMENT je soucasti BrowserModule a obsahuje *ngFor a *ngIf
import { FormsModule } from '@angular/forms'; //COMMENT je soucasti NgModule a slouzi pro obousmerny binding [(ngModel)]

import { StarComponent } from './star.component';

@NgModule({
  imports: [ //COMMENT importuju to co chci pouzit v konkretnim modulu, kazdopadne muzu modely exportovat, i kdyz nejsou importovany
    CommonModule
    ],
  exports : [ //COMMENT pokud chci, aby nektera componenta(StarComponrnt), modul, pipe byl dostupny i v komponentach, ktery jsou v modulu(SharedModule), ktrety tento modul importuji(ProductModule), tak musi byt nadefinovany export
    CommonModule, //diky tomu je napr. StarComponent a FormsModule dostupna v ProductModule
    FormsModule,  //nikdy se nesmi exportovat service!
    StarComponent
  ],
  declarations: [ StarComponent ],
})
export class SharedModule { }
