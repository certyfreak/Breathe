import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomComponent } from './components/custom/custom.component';
import { BreatheComponent } from './components/home/breathe/breathe.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SettingComponent } from './components/setting/setting.component';
import { SupportComponent } from './components/support/support.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'support',component:SupportComponent},
  {path:'custom',component:CustomComponent},
  {path:'progress',component:ProgressComponent },
  {path:'setting',component:SettingComponent},
  {path:'info',component:InfoComponent},
  {path:'breathe',component:BreatheComponent},
  {path:' ',component:HomeComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
