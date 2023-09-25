import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesDocumentationComponent } from './pipes-documentation.component';
import { RouterModule } from '@angular/router';
import { PIPES_ROUTES } from '../pipes.router';




@NgModule({
  declarations: [ PipesDocumentationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PIPES_ROUTES)
  ]
})
export class PipesModule { }
