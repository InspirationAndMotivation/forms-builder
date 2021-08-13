import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {

  constructor() { }

  private fontColor?:string;

  setData(fontColor:string){
    this.fontColor = fontColor;
  }

  getData(){
    let temp = this.fontColor;
    this.clearData();
    return temp;
  }

  clearData(){
    this.fontColor = '';
  }
}
