import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PortalModule } from '@angular/cdk/portal';
import { FormsModule } from '@angular/forms';
import {DragDrop, DragDropModule} from "@angular/cdk/drag-drop";

import { appRoutingModule } from "./app.routing";
import { AppComponent } from './app.component';
import { StylingsectionComponent } from './stylingsection/stylingsection.component';
import { DragsectionComponent } from './dragsection/dragsection.component';
import { DropsectionComponent } from './dropsection/dropsection.component';
import {CdkAccordionModule} from "@angular/cdk/accordion";
import { FormStylingDirective } from './directives/form-styling.directive';
import {HomeComponent} from "./home_page";
import {LoginComponent} from "./login_page";
import {RegisterComponent} from "./register_page";

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
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
