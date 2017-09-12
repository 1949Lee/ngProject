import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Stock} from "../stock.component";
import {Observable} from "rxjs/Observable";
import {isUndefined} from "util";
import {Injectable} from "@angular/core";

@Injectable()
export class RoutResolveGuard implements Resolve<Stock>{
  constructor(private router:Router){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Stock> | Promise<Stock> | Stock {
    if(!isUndefined(route.params['id'])){
      //可以返回promise进行后台获取数据并显示加载动画，当promise完成时即跳转
      console.log('成功了');
      return new Stock(route.params['id'],'Two New Hero');
    }
    else{
      this.router.navigate(['/error']);
      return undefined;
    }
  }

}
