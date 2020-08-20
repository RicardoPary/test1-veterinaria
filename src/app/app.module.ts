import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MascotaComponent } from './mascota/mascota.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MascotaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
