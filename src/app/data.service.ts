import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData() {
    return this.http.get('https://bikeindex.org/api/v3/search?location=seattle&distance=10&stolenness=proximity').map(
      (res) => res.json()
    );
  }
}
