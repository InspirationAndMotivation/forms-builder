import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PortalModule } from '@angular/cdk/portal';
import { FormsModule } from '@angular/forms';
import {DragDrop, DragDropModule} from "@angular/cdk/drag-drop";

import { AppComponent } from './app.component';
import { StylingsectionComponent } from './stylingsection/stylingsection.component';
import { DragsectionComponent } from './dragsection/dragsection.component';
import { DropsectionComponent } from './dropsection/dropsection.component';
import {CdkAccordionModule} from "@angular/cdk/accordion";

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
    DropsectionComponent
  ],
    imports: [
        BrowserModule,
        PortalModule,
        FormsModule,
        DragDropModule,
        CdkAccordionModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
