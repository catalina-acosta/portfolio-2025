import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TranslateService,
  TranslatePipe,
} from "@ngx-translate/core";

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  activeSection: string = "";
  currentLanguage: string = "en";

  constructor(private translate: TranslateService){}

  setActive(link: string) {
    this.activeSection = link;
  }

  changeLanguage(language: string) {
    this.translate.use(language);
    this.currentLanguage = language;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['about', 'skills', 'projects', 'contact'];
    const offset = 104; 
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom >= offset) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
}
