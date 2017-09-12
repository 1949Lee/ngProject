import {Injectable} from '@angular/core';

@Injectable()
export class AppConfig {
  public isDevEnv = true;
  public stockCategory = [
    "互联网",
    "金融",
    "零售",
    "游戏",
    "医疗"
  ];
  constructor() { }

}
