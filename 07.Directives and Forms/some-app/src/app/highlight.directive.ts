import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit,OnDestroy {

  constructor(private elRef: ElementRef, private renderer:Renderer2) { }
  ngOnInit(): void {
    // console.log(this.elRef)
    
    // Bad practise
    // this.elRef.nativeElement.style.background = 'orange'
    
    //Good practise
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'purple')
    
    this.renderer.listen(
      this.elRef.nativeElement, 'mouseenter', this.mouseEnterHandler.bind(this)
    )
    
    this.renderer.listen(
      this.elRef.nativeElement, 'mouseleave', this.mouseLeaveHandler.bind(this)
    )
  }
  
  mouseEnterHandler(e: MouseEvent): void{
    // console.log(e)
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'pink')
    this.renderer.addClass(this.elRef.nativeElement, 'highlight')
  }
  
  mouseLeaveHandler(e:MouseEvent):void{
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'initial')
    this.renderer.removeClass(this.elRef.nativeElement, 'highlight')
  }
  ngOnDestroy(): void {
      console.log('Destroy invoked!')
  }
}
