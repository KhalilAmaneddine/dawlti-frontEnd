import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CivilextractformComponent } from './civilextractform/civilextractform.component';
import { JudicialextractComponent } from './judicialextract/judicialextract.component';
import { JudicialextractdocumentComponent } from './judicialextractdocument/judicialextractdocument.component';
import { CivilextractdocumentComponent } from './civilextractdocument/civilextractdocument.component';
import { RouteGuardService } from './route-guard.service';
import { HistroyCivilComponent } from './histroy-civil/histroy-civil.component';
import { HistoryJudicialComponent } from './history-judicial/history-judicial.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminGuardService } from './admin-guard.service';
import { RegisterLoginGuardService } from './register-login-guard.service';
import { AdminViewCivilComponent } from './admin-view-civil/admin-view-civil.component';
import { AdminViewJudicialComponent } from './admin-view-judicial/admin-view-judicial.component';

const routes: Routes = [
  {path: '', component: HistroyCivilComponent, canActivate: [RouteGuardService]},
  {path: 'register', component: RegisterComponent, canActivate: [RegisterLoginGuardService]},
  {path: 'login', component: LoginComponent, canActivate: [RegisterLoginGuardService]},
  {path: 'Home', component: HistroyCivilComponent, canActivate: [RouteGuardService]},
  {path: 'civilextractform', component: CivilextractformComponent, canActivate: [RouteGuardService]},
  {path: 'judicialextractform', component: JudicialextractComponent, canActivate: [RouteGuardService]},
  {path: 'civilextractdocument', component: CivilextractdocumentComponent, canActivate: [RouteGuardService]},
  {path: 'judicialextractdocument', component: JudicialextractdocumentComponent, canActivate: [RouteGuardService]},
  {path: 'historyCivil', component: HistroyCivilComponent, canActivate: [RouteGuardService]},
  {path: 'historyJudicial', component: HistoryJudicialComponent, canActivate: [RouteGuardService]},
  {path: 'adminHome', component: AdminHomeComponent, canActivate: [AdminGuardService]},
  {path: 'adminViewCivil', component: AdminViewCivilComponent, canActivate: [AdminGuardService]},
  {path: 'adminViewJudicial', component: AdminViewJudicialComponent, canActivate: [AdminGuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
