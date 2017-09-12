import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";
import {StockComponent} from "../stock.component";
import {Observable} from "rxjs/Observable";

export class RoutOutGuard implements CanDeactivate<StockComponent>{
  canDeactivate(component: StockComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(component.isMarked()){
      return true;
    }
    else{
      return window.confirm('收藏股票方便以后及时获得股票最新消息,确定不关注直接离开？');
    }
  }

}
