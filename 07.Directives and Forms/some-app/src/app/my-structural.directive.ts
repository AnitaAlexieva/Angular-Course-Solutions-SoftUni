  import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

  @Directive({
    selector: '[appMyStructural]',
    exportAs:'appMyStructural'
  })
  export class MyStructuralDirective implements  OnChanges{
    @Input() appMyStructural: boolean = false

    constructor(
      private templateRef: TemplateRef<any>,
      private vcRef: ViewContainerRef
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
      console.log('On changes', this.appMyStructural)

      if(this.appMyStructural){
        this.vcRef.createEmbeddedView(this.templateRef, 
          //context
          {
          myCustomValue: 'This is my custom message!',
          myNum: 123,
          $implicit:'Default value!'
        }
      )
      }else{
        this.vcRef.clear()
      }
    }

  }
