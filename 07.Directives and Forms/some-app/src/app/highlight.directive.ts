import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

type MyVoid =() =>void
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit,OnDestroy {

  unsubFromEventsArray: MyVoid[]=[]
  constructor(private elRef: ElementRef, private renderer:Renderer2) { }
  ngOnInit(): void {
    // console.log(this.elRef)
    
    // Bad practise
    // this.elRef.nativeElement.style.background = 'orange'
    
    //Good practise
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'purple')
    
    const mouseEnterEvent = this.renderer.listen(
      this.elRef.nativeElement, 'mouseenter', this.mouseEnterHandler.bind(this)
    )
    
    const mouseLeaveEvent =  this.renderer.listen(
      this.elRef.nativeElement, 'mouseleave', this.mouseLeaveHandler.bind(this)
    )

    this.unsubFromEventsArray.push(mouseEnterEvent);
    this.unsubFromEventsArray.push(mouseLeaveEvent)
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
      console.log(this.unsubFromEventsArray)

      this.unsubFromEventsArray.forEach((eventFn) => {
        eventFn()
      })
  }
}
