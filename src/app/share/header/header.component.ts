import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isSideNavCollapsed = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleSideMenu () {
    this.isSideNavCollapsed =  !this.isSideNavCollapsed;
  }
  openSideMenu() {
    this.isSideNavCollapsed = true;
  }
  closeSideMenu() {
    this.isSideNavCollapsed = false;
  }
}
