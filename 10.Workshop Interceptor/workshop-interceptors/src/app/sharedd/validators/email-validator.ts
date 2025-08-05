import { ValidatorFn } from "@angular/forms";
 
 export function emailValidator(domain:string[]):ValidatorFn{
    const domainString = domain.join('|')
const regExp = new RegExp(`^[^@\\s]+@[^@\\s]+\\.(${domainString})$`, 'i');
    return (control) =>{
      console.log('controlValue: ', control.value === '' || regExp.test(control.value))
      const isEmailValid = regExp.test(control.value)
      console.log('Test Regex ', isEmailValid, 'controleValue: ', control.value)
      return isEmailValid ? null : {emailValidator: true};
    };
  }