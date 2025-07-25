import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appMyRouterLink]'
})
export class MyRouterLinkDirective implements OnInit{
  @Input() appMyRouterLink: string = ''

  constructor(
    private elRef:ElementRef,
    private rederer: Renderer2,
    private router: Router
  ) { }


  ngOnInit(): void {
    //console.log(this.appMyRouterLink)
    
    this.rederer.listen(this.elRef.nativeElement, 'click', this.clickHandler.bind(this))
  }

  clickHandler(e: MouseEvent){
    //console.log('click')

    this.router.navigate([this.appMyRouterLink])
  }
}
