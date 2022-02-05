import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { SupportComponent } from './components/support/support.component';
import { SettingComponent } from './components/setting/setting.component';
import { InfosectionService } from './services/infosection.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SupportComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [InfosectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
