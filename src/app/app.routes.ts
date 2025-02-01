import {Routes} from '@angular/router';
import {AppBuilderComponent} from "./app-builder/app-builder.component";
import {HomeComponent} from "./home/home.component";
import {GeneratedPageComponent} from "./generated-page/generated-page.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'builder', component: AppBuilderComponent},
  {path: 'generated-page', component: GeneratedPageComponent},
];
