import {Component, OnInit } from '@angular/core';

@Component({
selector: 'app-header',
templateUrl: './header.component.html',
styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  ImagePath: string;
  
  constructor() {
    //image location
    this.ImagePath = 'https://play-lh.googleusercontent.com/vB9m99H0u7ZC2F13o-aIXD2Z2ZjUENI1o2Jf-xOnmu3ce_MHRPFEvIHM31d9m1qgmVQ'
  }
  
  ngOnInit() {
  }
  
}