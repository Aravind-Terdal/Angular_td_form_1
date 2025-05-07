import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TdFormComponent } from './shared/components/td-form/td-form.component';
import { FormsModule } from '@angular/forms';
import { TdFormListComponent } from './shared/components/td-form-list/td-form-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TdFormComponent,
    TdFormListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
