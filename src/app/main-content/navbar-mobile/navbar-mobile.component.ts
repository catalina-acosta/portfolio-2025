import { Component } from '@angular/core';
import {
  TranslateService,
  TranslatePipe,
} from "@ngx-translate/core";

@Component({
  selector: 'app-navbar-mobile',
  imports: [TranslatePipe],
  templateUrl: './navbar-mobile.component.html',
  styleUrl: './navbar-mobile.component.scss'
})
export class NavbarMobileComponent {
  isclicked: boolean = false;
  currentLanguage: string = "en";

  constructor(private translate: TranslateService){}

  toggleMenu() {
    this.isclicked = !this.isclicked;
  }

  changeLanguage(language: string) {
    this.translate.use(language);
    this.currentLanguage = language;
  }
}
