import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { BannerCutOutComponent } from '../banner-cut-out/banner-cut-out.component';
import { LoaderComponent } from '../loader/loader.component';
import { CreditCardInputComponent } from '../credit-card-input/credit-card-input.component';


@NgModule({
  declarations: [
    CardComponent,
    BannerCutOutComponent,
    LoaderComponent,
    CreditCardInputComponent
  ],
  exports: [
    CardComponent,
    BannerCutOutComponent,
    LoaderComponent,
    CreditCardInputComponent

  ],
  imports: [
    CommonModule,
    
  ]
})
export class SharedModule { }
