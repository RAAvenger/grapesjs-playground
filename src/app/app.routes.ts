import {Routes} from '@angular/router';
import {AppBuilderComponent} from "./app-builder/app-builder.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'builder', component: AppBuilderComponent},
];
