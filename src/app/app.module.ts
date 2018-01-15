import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PoolApiService } from "../shared/services/pool-api.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PoolApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
