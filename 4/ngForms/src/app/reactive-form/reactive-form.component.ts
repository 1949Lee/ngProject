import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {passwordValidator, phoneValidator, userAvailableAsyncValidator} from "../validators/commonValidators";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  public formModel: FormGroup;
  public formBuilder: FormBuilder = new FormBuilder();

  constructor() {
    this.formModel = this.formBuilder.group({
      userName: ['',[Validators.required,Validators.minLength(6)],userAvailableAsyncValidator({userNameAvailabel:'用户名已存在'})],
      emails: this.formBuilder.array([
        ['']
      ]),
      phone: ['',phoneValidator({phone:'手机号错误'})],
      passwordInfo: this.formBuilder.group({
        password: ['',[Validators.required]],
        passwordConfirm: ['']
      },{validator:passwordValidator({passwordConfirm:'密码不一致'})})
    })
  }

  ngOnInit() {
  }

  register() {
    if(this.formModel.valid){
      console.log(this.formModel.value);
    }
    else{
      console.log(this.formModel.get('phone').errors);
    }
  }

  addEmail() {
    let emails = this.formModel.get('emails') as FormArray;
    console.log(this.formModel.get('emails'));
    emails.push(new FormControl());

  }

}
