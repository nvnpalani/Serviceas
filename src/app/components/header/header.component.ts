import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isDarkMode = false;
  activeLink = 'home';
  private isBrowser = false;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      // Check for saved theme preference
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        this.isDarkMode = true;
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setActive(link: string) {
    this.activeLink = link;
    this.isMenuOpen = false;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isBrowser) {
      if (this.isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      }
    }
  }
}
