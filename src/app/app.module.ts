import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SubComponent } from './sub/sub.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      MainComponent,
      SubComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
