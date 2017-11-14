import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {StockComponent} from "./stock/stock.component";
import {Page404Component} from "./page404/page404.component";
import {FavoritesComponent} from "./favorites/favorites.component";
import {CompanyInfoComponent} from "./company-info/company-info.component";
import {ConsultComponent} from "./consult/consult.component";
import {RoutInGuard} from "./stock/guard/rout.in.guard";
import {RoutOutGuard} from "./stock/guard/rout.out.guard";
import {RoutResolveGuard} from "./stock/guard/rout.resolve.guard";

const routes: Routes = [
  {path:'consult',component:ConsultComponent,outlet:'consult'},
  { path:'',redirectTo:'home',pathMatch:'full' },//路由重定向
  { path:'home',component:HomeComponent,
    children:[
      {path:'favorites',component:FavoritesComponent},
    ]
  },
  { path:'stock/:id',component:StockComponent,
    children:[
      {path:'',component:FavoritesComponent},
      {path:'favorites',component:FavoritesComponent},
      {path:'companyInfo/:title',component:CompanyInfoComponent},
      ],
    // canActivate:[RoutInGuard],
    // canDeactivate:[RoutOutGuard]
    resolve:{
     stock:RoutResolveGuard
    }
  },
  { path:'**',component:Page404Component, data:{title:'起奏陛下',content:'网址输错了'}}//这个一定要放在最后！！！
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
