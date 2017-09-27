import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {InputMaskModule} from './mask/inputmask'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InputMaskModule,
  FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
