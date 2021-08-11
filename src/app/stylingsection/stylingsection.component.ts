import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylingsection',
  templateUrl: './stylingsection.component.html',
  styleUrls: ['./stylingsection.component.scss']
})
export class StylingsectionComponent implements OnInit {
  items = ['General Styling', 'Field Styling'];
  expandedIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
