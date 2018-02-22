import { Component, OnInit } from '@angular/core';
import { HeadertoolbarComponent } from '../headertoolbar/headertoolbar.component';
import { FootertoolbarComponent } from '../footertoolbar/footertoolbar.component';
import { ContentbarComponent } from '../contentbar/contentbar.component';

@Component({
  selector: 'app-bundlebar',
  templateUrl: './bundlebar.component.html',
  styleUrls: ['./bundlebar.component.css']
})
export class BundlebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
