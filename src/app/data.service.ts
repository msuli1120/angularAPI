import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Apikeys } from './apiKeys';

@Injectable()
export class DataService {

  constructor(private http: Http, private apikeys: Apikeys) { }

  fetchData() {
    console.log(this.apikeys.weatherApi);
    return this.http.get('https://bikeindex.org/api/v3/search?location=seattle&distance=10&stolenness=proximity').map(
      (res) => res.json()
    );
  }
}
