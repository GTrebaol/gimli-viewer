import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/retryWhen";

const API_URL = 'https://api.nanopool.org/v1/eth/';

@Injectable()
export class PoolApiService {

  private walletAddress = '0xf5e8e86bd94423d5587103b6f38f31baf0fed979';
  private nbRetries = 5;

  constructor(private httpClient: HttpClient) {
  }

  public getInfo() {
    return this.httpClient.get(API_URL + 'user/' + this.walletAddress);
  }

  public getHistory(): Observable<any> {
    return this.httpClient.get(API_URL + 'history/' + this.walletAddress);
  }

  public getHashrateAndBalance(): Observable<any> {
    return this.httpClient.get(API_URL + 'balance_hashrate/' + this.walletAddress);
  }

  public getPayements(): Observable<any> {
    return this.httpClient.get(API_URL + 'payments/' + this.walletAddress);
  }

  public getLastReportedHash(): Observable<any> {
    return this.httpClient.get(API_URL + 'reportedhashrate/' + this.walletAddress);
  }

  public getBalance(): Observable<any> {
    return this.httpClient.get(API_URL + 'balance/' + this.walletAddress);
  }

  public getAvgHashrate(period?: number): Observable<any> {
    let url = API_URL + 'avghashratelimited/' + this.walletAddress;
    if (period) {
      url += '/' + period;
    }
    return this.httpClient.get(url);
  }

  public getHashrate(): Observable<any> {
    return this.httpClient.get(API_URL + 'hashrate/' + this.walletAddress);
  }

  public getHashrateChart(): Observable<any> {
    return this.httpClient.get(API_URL + 'hashratechart/' + this.walletAddress);
  }

}
