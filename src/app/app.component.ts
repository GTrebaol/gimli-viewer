import { Component } from "@angular/core";
import { PoolApiService } from "../shared/services/pool-api.service";
import { User } from "../shared/model/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private gimli: User;

  constructor(private _nanoPoolService: PoolApiService) {
  }

  ngOnInit() {
    this._getInfo();
  }

  private _getInfo() {
    this._nanoPoolService.getInfo().subscribe(response => {
      console.log(response);
      this.gimli = response.data;
      console.log(this.gimli);
    });
  }
}
