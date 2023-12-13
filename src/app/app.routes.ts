import { Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {NumseiComponent} from "./numsei/numsei.component";

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'numsei', component: NumseiComponent },
];
