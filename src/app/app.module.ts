import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterPipe} from './pipes/filter-pipe';
import { reducers } from './store';
import { environment } from '../environments/environment';
import { AuthEffects } from './store/effects/auth.effects';
import { EffectsSteleFields } from './store/effects/components-style.effects';
import { SharedModules } from './shared/shared.modules';
import { StylePanelComponent } from './components/style-panel/style-panel.component';
import { AuthModule } from './components/pages/auth/auth.module';
import { RegisterModule } from './components/pages/register/register.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterPipe,
    StylePanelComponent,
  ],
  imports: [
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([AuthEffects, EffectsSteleFields]),
    AppRoutingModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatExpansionModule,
    SharedModules,
    AuthModule,
    RegisterModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
