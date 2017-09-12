import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrls: ['./rx-js.component.css']
})
export class RxJSComponent implements OnInit {
  searchInput:FormControl = new FormControl();
  text:string;

  constructor() { }

  ngOnInit() {
    Observable.from([1,2,3,4])
      .filter(e => e%2 == 0)
      .map(e => e*e)
      .subscribe(
        e => console.log(e),
        error => console.error(error),
        () => console.log('流结束')
      )
    this.searchInput.valueChanges
      .debounceTime(2000)
      .subscribe(
      text => this.getSearchResult(text)
    )
  }
  getSearchResult(value){
    console.log(value);
    this.text = value;
  }

}
