import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { RouterModule } from '@angular/router';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { APP_ROUTES } from './routes/app.routes';
<<<<<<< HEAD
import { TruncatePipesComponent } from './components/truncate.pipes/truncate.pipes.component';
=======
import { ServicesDocumentationComponent } from './services/services-documentation/services-documentation.component';
import { DirectivesDocumentationComponent } from './directives/directives-documentation/directives-documentation.component';
>>>>>>> 831c4f839eca5d77817170edf0aeca6705ffb871

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingComponent,
    TopOfPageComponent,
    ComponentDocumentationComponent,
<<<<<<< HEAD
    TruncatePipesComponent
=======
    ServicesDocumentationComponent,
    DirectivesDocumentationComponent
>>>>>>> 831c4f839eca5d77817170edf0aeca6705ffb871
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
