import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  constructor(private isDevEnv:boolean) { }

  log(message:any){
    if(this.isDevEnv){
      console.log(message);
    }
  }

}
