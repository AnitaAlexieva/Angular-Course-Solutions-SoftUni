import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMaxCount]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useExisting:MaxCountDirective,
      multi:true
    }
  ]
})
export class MaxCountDirective implements Validator {
  
  @Input() appMaxCount:number | undefined

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    const len =  control.value?.length | 0;

    console.log(len);
    console.log(this.appMaxCount);

    if(!this.appMaxCount || len <=this.appMaxCount){
      return null;
    }

    return {appMaxCount: this.appMaxCount}
    }
  

}
