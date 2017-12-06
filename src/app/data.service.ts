import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  ninjaGold: number[] = [];
  sender: String = "";
  messages: string[] = [];
  sum: number = 0;
  randomNum: number; 

  constructor() { }

  collectGold(sender:string, min, max){
    console.log("min and max", min, max)
    console.log("in farmGold - data.service");
    this.randomNum = Math.floor(Math.random()*max)+(min);


    this.ninjaGold.push(this.randomNum);
    console.log("getting Gold--", this.randomNum);
    this.sum += this.randomNum;
    console.log("sum", this.sum);
    this.displayMessage(sender, this.randomNum);
    return this.randomNum;

  }

  displayMessage(sender:string, gold:number){ 
   if(gold<0){
      this.messages.push("You've lose " + gold + " gold at the " + sender);
    }else{
      this.messages.push("You've earned " + gold + " gold at the " + sender);
    }
  }



}
