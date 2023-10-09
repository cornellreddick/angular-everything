import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentDocumentationComponent } from './component-documentation/component-documentation.component';
import { COMPONENTS_ROUTES } from './components.routes';
import { AccordionComponent } from './accordion/accordion.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SharedModule } from './shared/shared.module';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    AccordionComponent,
    ProgressBarComponent,
    StarRatingComponent

  ],
  imports: [
  CommonModule,
  SharedModule,
  // FormsModule,
  // ReactiveFormsModule,
  // RouterModule.forChild(COMPONENTS_ROUTES)
  ]
})
export class ComponentsModule { }
