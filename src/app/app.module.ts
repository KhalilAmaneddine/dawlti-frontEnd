import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CivilextractformComponent } from './civilextractform/civilextractform.component';
import { JudicialextractComponent } from './judicialextract/judicialextract.component';
import { CivilextractdocumentComponent } from './civilextractdocument/civilextractdocument.component';
import { JudicialextractdocumentComponent } from './judicialextractdocument/judicialextractdocument.component';
import { RouteGuardService } from './route-guard.service';
import { HistroyCivilComponent } from './histroy-civil/histroy-civil.component';
import { HistoryJudicialComponent } from './history-judicial/history-judicial.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';






@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    CivilextractformComponent,
    JudicialextractComponent,
    CivilextractdocumentComponent,
    JudicialextractdocumentComponent,
    HistroyCivilComponent,
    HistoryJudicialComponent,
    AdminHomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RouteGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
