import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawerapps',
  templateUrl: './drawerapps.component.html',
  styleUrls: ['./drawerapps.component.css']
})
export class DrawerappsComponent implements OnInit {
  public appicons = APPICONS;

  constructor() {
    }

  ngOnInit() {
    //   for (let app of this.appicons) {
    //     app.color = this.getRandomColor();
    // }
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}

class AppIcon {
	title: string;
  url: string;
  color: string;
}

var APPICONS: AppIcon[] = [
  { "title": "Plane", "url": "fa fa-paper-plane", "color":"#003665" },
  { "title": "Car", "url": "fa fa-car", "color":"#003665" },
  { "title": "Motorcycle", "url": "fa fa-motorcycle", "color":"#003665" },
  { "title": "Other Services", "url": "fa fa-exchange", "color":"#003665" },
  { "title": "Payments", "url": "fa fa-credit-card", "color":"#003665" },
  { "title": "Functions", "url": "fa fa-slack", "color":"#003665" }
];