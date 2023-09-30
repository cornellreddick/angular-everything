import { Route, Routes } from "@angular/router";
import { ComponentDocumentationComponent } from "../components/component-documentation/component-documentation.component";
import { ServicesDocumentationComponent } from "../services/services-documentation/services-documentation.component";
import { DirectivesDocumentationComponent } from "../directives/directives-documentation/directives-documentation.component";
export const APP_ROUTES: Routes = [
    {path: '', component: ComponentDocumentationComponent},
    {path: 'directives', component: DirectivesDocumentationComponent},
    {path: 'pipes', loadChildren: () => import('../pipes/pipes.module').then((m) => m.PipesModule) },
    {path: 'services', component: ServicesDocumentationComponent}

];