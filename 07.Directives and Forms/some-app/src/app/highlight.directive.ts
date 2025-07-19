import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer:Renderer2) { }
  ngOnInit(): void {
      console.log(this.elRef)

      // Bad practise
      this.elRef.nativeElement.style.background = 'orange'

      //Good practise
      this.renderer.setStyle(this.elRef.nativeElement, 'background', 'purple')

  }

}
