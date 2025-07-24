import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appEmail]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useExisting:EmailDirective,
      multi:true
    }
  ]
})
export class EmailDirective implements Validator{
  @Input() appEmail: string[] = []
  constructor() { }
 
  validator: ValidatorFn = () => null;

  validate(control: AbstractControl): ValidationErrors | null {

    console.log('control', control)
    return null
  }

  emailValidator(domain:string[]):ValidatorFn{
    return (control) =>{
      console.log('controlValue: ', control.value)

      return null
    }
  }
}
