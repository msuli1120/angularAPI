import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { Apikeys } from './apiKeys';

@Injectable()
export class DataService {

  constructor(private http: Http, private apikeys: Apikeys) { }

  fetchData(city: string) {
    return Observable.forkJoin(
      this.http.get('https://bikeindex.org/api/v3/search?location=' + city + '&distance=10&stolenness=proximity').map(
        (res) => res.json()),
        this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + this.apikeys.weatherApi).map(
          (res) => res.json())
    );
  }
}
