import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  response: Observable<any>;

  constructor(public navCtrl: NavController,  public http: Http) {

  }
  
 pressedA():void{
    console.log("A");
    this.response = this.http.get('http://google.com');
    //console.log(this.response);
    this.response
    .map(res => res.json())
    .subscribe(data => {
      console.log('my data: ', data);
    })
    
  
  }
  pressedB():void{
    console.log("B");
    this.response = this.http.get('http://google.com');
    //console.log(this.response);
    this.response
    .map(res => res.json())
    .subscribe(data => {
      console.log('my data: ', data);
    })
    
  
  }
  pressedX():void{
    console.log("X");
    this.response = this.http.get('http://google.com');
    //console.log(this.response);
    this.response
    .map(res => res.json())
    .subscribe(data => {
      console.log('my data: ', data);
    })
   }
   pressedY():void{
    console.log("Y");
    this.response = this.http.get('http://google.com');
    //console.log(this.response);
    this.response
    .map(res => res.json())
    .subscribe(data => {
      console.log('my data: ', data);
    })
    
  
  }
  pressedLeft():void{
    console.log("<-");
    this.response = this.http.get('http://google.com');
    //console.log(this.response);
    this.response
    .map(res => res.json())
    .subscribe(data => {
      console.log('my data: ', data);
    })
    
  
  }
  pressedRight():void{
    console.log("->");
    this.response = this.http.get('http://google.com');
    //console.log(this.response);
    this.response
    .map(res => res.json())
    .subscribe(data => {
      console.log('my data: ', data);
    })
   }
  pressedUp():void{
    console.log("^");
    this.response = this.http.get('http://google.com');
    //console.log(this.response);
    this.response
    .map(res => res.json())
    .subscribe(data => {
      console.log('my data: ', data);
    })
    
  
  }
  pressedDown():void{
    console.log("v");
    this.response = this.http.get('http://google.com');
    //console.log(this.response);
    this.response
    .map(res => res.json())
    .subscribe(data => {
      console.log('my data: ', data);
    })
    
  
  }
  }


