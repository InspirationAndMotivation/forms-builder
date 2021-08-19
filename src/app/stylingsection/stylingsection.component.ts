import { Component, OnInit } from '@angular/core';
import {DatatransferService} from "../services/datatransfer.service";

@Component({
  selector: 'app-stylingsection',
  templateUrl: './stylingsection.component.html',
  styleUrls: ['./stylingsection.component.scss']
})
export class StylingsectionComponent implements OnInit {
  items = ['General Styling', 'Field Styling'];
  expandedIndex = 0;
  fontSize!: number;

  constructor() { }

  ngOnInit(): void {
  }

  setFontColor(fontColor:string) {
    console.log('Data send!');
  }

}
