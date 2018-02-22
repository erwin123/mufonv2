import { Component, OnInit } from '@angular/core';
import {DrawerappsComponent} from '../drawerapps/drawerapps.component';
import {SliderappsComponent} from '../sliderapps/sliderapps.component';


@Component({
  selector: 'app-contentbar',
  templateUrl: './contentbar.component.html',
  styleUrls: ['./contentbar.component.css']
})
export class ContentbarComponent implements OnInit {
  public appicons = APPICONS;
  constructor() { }

  ngOnInit() {  }
}


class AppIcon {
	title: string;
	url: string;
}

var APPICONS: AppIcon[] = [
  { "title": "Plane", "url": "fa fa-paper-plane" },
  { "title": "Car", "url": "fa fa-car" },
  { "title": "Motorcycle", "url": "fa fa-motorcycle" },
  { "title": "Other Services", "url": "fa fa-exchange" },
  { "title": "Payments", "url": "fa fa-credit-card" },
  { "title": "Functions", "url": "fa fa-slack" },
];
