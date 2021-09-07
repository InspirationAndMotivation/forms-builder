import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthPageComponent } from './components/pages/auth/auth.component';
import { RegisterComponent } from './components/pages/register/register.component';
// import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: AuthPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'builder', loadChildren: () => import('./components/pages/builder/builder.module')
      .then(m => m.BuilderModule) },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

