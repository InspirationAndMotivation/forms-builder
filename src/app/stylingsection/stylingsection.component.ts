import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylingsection',
  templateUrl: './stylingsection.component.html',
  styleUrls: ['./stylingsection.component.scss']
})
export class StylingsectionComponent implements OnInit {
  acc = document.getElementsByClassName('accordion');

  constructor() { }

  ngOnInit(): void {
  }

}
