
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home_page";
import { LoginComponent } from "./login_page";
import { RegisterComponent } from "./register_page";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);

