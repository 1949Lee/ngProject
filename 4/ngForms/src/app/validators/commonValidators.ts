import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";

//验证手机号
export function phoneValidator(error:any):any {
  return function (mobile: FormControl) {
    let value = (mobile.value || '') + '';
    var Reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let valid = Reg.test(value);
    console.log('phone是否校验通过:'+valid);
    return valid ? null : error;
  }
}

//异步校验（例如用户名是否可用）
export function userAvailableAsyncValidator(error:any):any {
  return function (userName: FormControl) {
    let value = (userName.value || '') + '';
    let userNameStr = "1949Lee";
    let valid = userNameStr != value;
    console.log('userName是否校验通过:'+valid);
    return Observable.of(valid ? null : error).delay(2000);
  }
}

//密码和确认密码是否一致
export function passwordValidator(error:any):any {
  return function(info: FormGroup):any{
    let password:FormControl = info.get('password') as FormControl;
    let pConfirm:FormControl = info.get('passwordConfirm') as FormControl;
    if(password != null && pConfirm != null) {
      let valid:boolean = password.value === pConfirm.value;
      console.log('password是否校验通过:'+valid);
      return valid ? null : error;
    }
    return null;
  }
}
