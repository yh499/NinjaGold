import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  farmNum: number[] = [];
  
  total: number; 
  constructor(private _dataService: DataService) { }

  ngOnInit() {
  //  this.farmNum = this._dataService.retrieveNumbers();
  //do I need retrieveNumbers?
  }

  getGold(sender: string, min, max){
    console.log(this.total, "----Gold");
    this.total = this._dataService.collectGold(sender, min, max);
  }

 

}
