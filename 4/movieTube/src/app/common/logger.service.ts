import {Inject, Injectable} from '@angular/core';
import {AppConfig} from "../config/app-config";

@Injectable()
export class LoggerService {

  constructor(private appConf:AppConfig) { }
  log(obj:any){
    if(this.appConf.isDevEnv){
      console.log(obj);
    }
  }

}
