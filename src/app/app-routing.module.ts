import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'home',loadChildren : () => import('./homepage/homepage.module').then(m => m.HomepageModule)},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  { path: 'YourRecommendations', loadChildren: () => import('./recommendation/recommendation.module').then(m => m.RecommendationModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 