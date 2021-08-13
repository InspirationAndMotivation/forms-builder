import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';
import {DatatransferService} from "../services/datatransfer.service";

@Directive({
  selector: '[appFormStyling]'
})
export class FormStylingDirective {
  @Input('color') dFontColor!: string;
  @Input('font-size') dFontSize: string = '15px';
  @Input() dBorderStyle!: {border?:string, borderRadius?:string, 'background-color'?:string};

  @HostBinding('style.color') fontColor = '';
  @HostBinding('style.font-size') fontSize = '';

  choosenFontColor = this.datatransferService.getData();

  constructor(private elemRef: ElementRef,
              private renderer: Renderer2,
              private datatransferService:DatatransferService) {

  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {

    this.renderer.setStyle(this.elemRef.nativeElement, 'color', this.choosenFontColor);
    /*
        this.renderer.setStyle(this.elemRef.nativeElement,
          'background-color',
          this.color);

    this.fontSize = this.dFontSize;
    this.fontColor = this.dFontColor;
    this.renderer.setStyle(this.elemRef.nativeElement, 'border', this.dBorderStyle.border);
    this.renderer.setStyle(this.elemRef.nativeElement, 'borderRadius', this.dBorderStyle.borderRadius);
    this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', this.dBorderStyle["background-color"]);
    */
    //this.renderer.setStyle(this.elemRef.nativeElement, 'color', this.dFontColor);
    //this.renderer.setStyle(this.elemRef.nativeElement, 'font-size', this.dFontSize);
  }

  @HostListener('mouseup') onEnter() {
    /*
        this.renderer.setStyle(this.elemRef.nativeElement,
          'background-color',
          this.color);
    */
    this.fontSize = this.dFontSize;
    //this.fontColor = this.dFontColor;
    this.renderer.setStyle(this.elemRef.nativeElement, 'border', this.dBorderStyle.border);
    this.renderer.setStyle(this.elemRef.nativeElement, 'borderRadius', this.dBorderStyle.borderRadius);
    this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', this.dBorderStyle["background-color"]);
    //this.renderer.setStyle(this.elemRef.nativeElement, 'color', this.dFontColor);
    //this.renderer.setStyle(this.elemRef.nativeElement, 'font-size', this.dFontSize);
  }

  @HostListener('mouseleave') onLeave() {

  }
}
