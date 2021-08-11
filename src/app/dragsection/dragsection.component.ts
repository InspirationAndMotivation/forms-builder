import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {TemplatePortal} from "@angular/cdk/portal";

@Component({
  selector: 'app-dragsection',
  templateUrl: './dragsection.component.html',
  styleUrls: ['./dragsection.component.scss']
})
export class DragsectionComponent implements OnInit {

  //portal$: Observable<TemplatePortal>;

  constructor() { }

  ngOnInit(): void {
  }

}
