import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {isNullOrUndefined} from "util";

//必填校验
export function $require(error:any):any {
  return function (fc: FormControl) {
    let result = Validators.required(fc);
    if(isNullOrUndefined(result)){
      result = null;
    }
    else{
      result = error;
    }
    return result;
  }
}
//必填校验
export function $minLength(number:number,error:any):any {
  return function (fc: FormControl) {
    let result = Validators.minLength(number)(fc);
    if(isNullOrUndefined(result)){
      result = null;
    }
    else{
      result = error;
    }
    console.log(result);
    return result;
  }
}

//数组至少填一项校验
export function $arryRequired(error:any):any {
  return function (fc: FormArray) {
    let result:boolean = false;
    console.log( fc.value);
    fc.value.forEach((value)=>{
      if(value){
        result = true;
      }
    })
    if(result){
      return null;
    }
    else{
      return error;
    }
  }
}
