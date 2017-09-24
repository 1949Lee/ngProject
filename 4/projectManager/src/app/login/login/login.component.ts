import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isNumber} from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [
        'example@example.com',
        Validators.compose([Validators.required, Validators.email])
      ],
      password: ['', Validators.required]
    })
  }
  onSubmit({ value, valid }, ev: Event) {
    if (valid) {
      console.log(value);
    }
    else {
      console.log(valid);
    }
  }

  validate(fc:FormControl):{[key:string]:any}{
    if(!fc.value){
      return null;
    }
    if(!isNumber(fc.value)){
      return {
        notNumber:'不是数字'
      }
    }
    else{
      return null;
    }
  }

}
