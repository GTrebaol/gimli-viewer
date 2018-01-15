import { AverageHashrate } from "./averagehashrate.model";
import { Worker } from "./worker.model";
export interface User {
  balance: number;
  unconfirmed_balance: number;
  hashrate: number;
  avgHashrate: AverageHashrate;
  workers: Worker[];
}
