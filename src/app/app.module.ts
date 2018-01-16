import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { PoolApiService } from "../shared/services/pool-api.service";
import { HttpClientModule } from "@angular/common/http";
import { ChartComponent } from "./chart/chart.component";
import { EthereumService } from "../shared/services/ethereum.service";


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PoolApiService, EthereumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
