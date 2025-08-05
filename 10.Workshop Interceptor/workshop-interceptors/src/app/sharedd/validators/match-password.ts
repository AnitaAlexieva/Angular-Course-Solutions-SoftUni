import { ValidatorFn } from "@angular/forms";

export function matchPasswordValidaiton(
  passWordControl: string,
  rePassWordControl:string

): ValidatorFn{
  return (control) => {

    const passFirst = control.get(passWordControl);
    const passSecond = control.get(rePassWordControl);
    const areMatching = passFirst?.value == passSecond?.value
   
    console.log(areMatching)
    return areMatching ? null : {matchPasswordValidaiton:true}
  }
}

