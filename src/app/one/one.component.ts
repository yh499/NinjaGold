import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  sum: number =0; 

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    
  }

}
