// Modules Imports
import { NgModule } from '@angular/core';
import { appRoutingModule } from "./app.routing";

// App Component Imports
import { AppComponent } from './app.component';
import { StylingsectionComponent } from './components/stylingsection/stylingsection.component';
import { DragsectionComponent } from './components/dragsection/dragsection.component';
import { DropsectionComponent } from './components/dropsection/dropsection.component';
import {HomeComponent} from "./components/home_page";
import {LoginComponent} from "./components/login_page";
import {RegisterComponent} from "./components/register_page";


// NGRX Imports
import { reducers } from './store';
//import { DnDEffect } from './store/DnDEffect';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


// Material Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { PortalModule } from '@angular/cdk/portal';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


// Other Imports
import {DragDrop, DragDropModule} from "@angular/cdk/drag-drop";
// import { FilterByNamePipe } from './pipes/filter-by-name.pipe';
import { environment } from '../environments/environment';
import {CdkAccordionModule} from "@angular/cdk/accordion";
import { FormStylingDirective } from './directives/form-styling.directive';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  entryComponents: [
    StylingsectionComponent,
    DragsectionComponent,
    DropsectionComponent
  ],
  declarations: [
    AppComponent,
    StylingsectionComponent,
    DragsectionComponent,
    DropsectionComponent,
    FormStylingDirective,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
    imports: [
        BrowserModule,
        PortalModule,
        FormsModule,
        DragDropModule,
        CdkAccordionModule,
        appRoutingModule,
        StoreModule.forRoot(reducers),
//        EffectsModule.forRoot([DnDEffect]),
        StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production
        }),
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      HttpClientModule,
      DragDropModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
