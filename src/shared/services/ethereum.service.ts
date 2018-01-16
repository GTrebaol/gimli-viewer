import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/retryWhen";

const API_URL = 'https://api.coinmarketcap.com/v1/ticker/ethereum/';

@Injectable()
export class EthereumService {

  constructor(private httpClient: HttpClient) {
  }

  public getInfo() {
    return this.httpClient.get(API_URL);
  }

}
