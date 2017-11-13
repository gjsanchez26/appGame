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
  films: Observable<any>;

  constructor(public navCtrl: NavController,  public http: Http) {

  }
  pressB():void{
    console.log("peliiiigroooooo");
    this.films = this.http.get('http://google.com');
    console.log(this.films);
    this.films
    .map(res => res.json())
    .subscribe(data => {
      console.log('my data: ', data);
    })
    
  
  }

}
