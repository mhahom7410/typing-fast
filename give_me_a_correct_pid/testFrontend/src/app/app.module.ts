import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IDCardFormComponent } from './idcard-form/idcard-form.component';
import { IdcardForm2Component } from './idcard-form2/idcard-form2.component';

@NgModule({
  declarations: [AppComponent, IDCardFormComponent, IdcardForm2Component],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
