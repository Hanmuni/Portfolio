import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  openMobileMenu() {
    document.getElementById('mobile-menu')?.classList.remove('d-none');
    document.getElementById('open-icon')?.classList.add('d-none');
    document.getElementById('open-icon')?.classList.add('d-none');
    document.getElementById('close-icon')?.classList.remove('d-none');
  }

  closeMobileMenu() {
    document.getElementById('mobile-menu')?.classList.add('d-none');
    document.getElementById('open-icon')?.classList.remove('d-none');
    document.getElementById('close-icon')?.classList.add('d-none');
  }

}
