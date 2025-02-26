import { Component } from '@angular/core';
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
  isclicked: boolean = false;
  activeSection: string = "";

  constructor(private translate: TranslateService){}
  
  toggleMenu() {
    this.isclicked = !this.isclicked;
  }

  setActive(link: string) {
    this.activeSection = link;
  }

  setActiveLanguage() {

  }
  changeLanguage(language: string) {
    this.translate.use(language);
  }

}
