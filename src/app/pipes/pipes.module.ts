import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';
import { RouterModule } from '@angular/router';
import { PIPES_ROUTES } from './pipes.routes';
import { SharedModule } from '../components/shared/shared.module';
import { TruncatePipe } from './truncate/truncate.pipe';
import { CreditCardFormaterPipe } from './credit-card-formatter/credit-card-formater.pipe';

@NgModule({
  declarations: [PipeDocumentationComponent, TruncatePipe, CreditCardFormaterPipe],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(PIPES_ROUTES)
  ]
})
export class PipesModule { }
