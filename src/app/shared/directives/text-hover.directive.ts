import { Directive, HostBinding, HostListener, Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextHover]'
})
export class TextHoverDirective {

  getvalue!:string
  constructor(private el:ElementRef, private renderer:Renderer2) {
    // renderer.setStyle(this.el.nativeElement,'color','green')
   }

  @HostBinding('style.border-bottom') border!: string; 
  @HostListener('mouseenter') colorChange(){
    this.border = '1px solid red'
    this.renderer.setStyle(this.el.nativeElement,'color','green')
  }
  @HostListener('mouseleave') color(){
    this.border = ''
    this.renderer.setStyle(this.el.nativeElement,'color','')
  }
}
