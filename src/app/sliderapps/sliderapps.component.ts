import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-sliderapps',
  templateUrl: './sliderapps.component.html',
  styleUrls: ['./sliderapps.component.css']
})
export class SliderappsComponent implements OnInit {
  public appicons = APPICONS;
  @Input() title:String;
  @Input() appiconsinput:AppIcon[];
  constructor() { }
  
  ngOnInit() {
  }

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