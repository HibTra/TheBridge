import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appZoomIn]'
})
export class ZoomInDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') zoomIn(){
   this.renderer.addClass(this.element.nativeElement, 'zoomIn')
  }
  @HostListener('mouseout') zoomOut(){
    this.renderer.removeClass(this.element.nativeElement, 'zoomIn')
  }

}
