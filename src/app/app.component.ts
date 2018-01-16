import { Component } from "@angular/core";
import { PoolApiService } from "../shared/services/pool-api.service";
import { User } from "../shared/model/user.model";
import { EthereumService } from "../shared/services/ethereum.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private gimli: User;
  private ethereumData;
  private chartData;
  private fiatValue: number;
  private retryCall = false;

  constructor(private _nanoPoolService: PoolApiService, private _ethereumService: EthereumService) {
  }

  ngOnInit() {
    this._getInfoPool();
  }

  private _getInfoPool() {
    this._nanoPoolService.getInfo().subscribe(response => {
      if (!response['status']) {
        this._getInfoPool();
      } else {
        this.gimli = response['data'];
        this._getInfoEthereum();
      }
    });
  }

  private _getInfoEthereum() {
    this._ethereumService.getInfo().subscribe(response => {
      this.ethereumData = response[0];
      this._calculations();
      this._getChartData();
    });
  }

  private _calculations() {
    if (this.gimli && this.ethereumData) {
      this.fiatValue = this.gimli.balance * this.ethereumData['price_usd'];
    }
  }

  private _getChartData() {
    this._nanoPoolService.getHashrateChart().subscribe(response => {
      this.chartData = response['data'];
    })
  }
}
