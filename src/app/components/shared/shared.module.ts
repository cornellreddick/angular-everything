import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { BannerCutOutComponent } from '../banner-cut-out/banner-cut-out.component';
import { LoaderComponent } from '../loader/loader.component';

@NgModule({
  declarations: [
    CardComponent,
    BannerCutOutComponent,
    LoaderComponent
  ],
  exports: [
    CardComponent,
    BannerCutOutComponent,
    LoaderComponent

  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
