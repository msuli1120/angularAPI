import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  providers: [DataService]
})
export class ListsComponent implements OnInit {
  bikes;
  temp;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  convert(temp) {
    var output = parseInt(temp) - 273.15;
    return Math.round(output);
  }

  submit(city: string) {
    this.dataService.fetchData(city).subscribe(
        (data) => {
          this.bikes = data[0].bikes;
          this.temp = this.convert(data[1].main.temp);
          console.log(data[1]);
        }
      );
  }
}
