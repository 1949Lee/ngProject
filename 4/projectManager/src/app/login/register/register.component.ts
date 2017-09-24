import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  items:string[];
  form:FormGroup;
  avatarName:string = 'avatars';

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    const itemsNum=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    const img=`${this.avatarName}:svg-${Math.floor(Math.random()*16).toFixed(0)}`;
    this.items = itemsNum.map(str =>{
      return `avatars:svg-${str}`;
    });
    this.form = this.fb.group({
      email:[],
      userName:[],
      password:[],
      confirmPassword:[],
      avatar:[img],
    })
  }
  onSubmit({valid,value},ev:Event){

  }

}
