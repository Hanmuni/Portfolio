import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-aboutme-section',
  templateUrl: './aboutme-section.component.html',
  styleUrls: ['./aboutme-section.component.scss']
})
export class AboutmeSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
