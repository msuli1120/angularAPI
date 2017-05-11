import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  providers: [DataService]
})
export class ListsComponent implements OnInit {
  bikes = [];
  constructor(private dataServie: DataService) { }

  ngOnInit() {
    this.dataServie.fetchData().subscribe(
      (data) => this.bikes = data.bikes
    );
  }

}
