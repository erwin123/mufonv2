import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headertoolbar',
  templateUrl: './headertoolbar.component.html',
  styleUrls: ['./headertoolbar.component.css']
})
export class HeadertoolbarComponent implements OnInit {

  constructor() { }
  public isCollapsed: boolean = false;
  public isCollapsable: boolean = false;
  ngOnInit() {
  }

  toggleMenu()
  {
    this.isCollapsed = !this.isCollapsed;
  }
}
