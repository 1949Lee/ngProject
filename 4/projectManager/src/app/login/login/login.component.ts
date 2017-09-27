import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isNumber} from 'util';
import { QuoteService } from '../../services/quote.service';
import { Quote } from '../../dommain/quote.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  quote: Quote = {
    "id": "1",
    "cn": "被击垮通常只是暂时的，但如果你放弃的话，就会使它成为永恒。（Marilyn vos Savant）",
    "en": "Being defeated is often a temporary condition. Giving up is what makes it permanent.",
    "pic": "/assets/img/quotes/1.jpg"
  };

  constructor(
    private fb: FormBuilder,
    private quoteService$:QuoteService
  ) { 
    this.quoteService$.getQuote().subscribe(quote => this.quote = quote);
  }

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
