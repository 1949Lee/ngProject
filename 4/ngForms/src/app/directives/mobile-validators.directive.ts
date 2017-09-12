import { Directive } from '@angular/core';
import {FormControl, FormGroup, NG_VALIDATORS} from "@angular/forms";
import {isNullOrUndefined} from "util";

@Directive({
  selector: '[mobile]',
  providers:[{provide:NG_VALIDATORS,useValue:phoneValidator}]

})
export class MobileValidatorsDirective {

  constructor() { }

}
export function phoneValidator(mobile: FormControl) {
  let value = (mobile.value || '') + '';
  if(!isNullOrUndefined(mobile)) {
    var Reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let valid = Reg.test(value);
    console.log('phone是否校验通过:' + valid);
    return valid ? null : {phone: '手机号不合法'};
  }
}
