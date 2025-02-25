import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective
} from "@ngx-translate/core";

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, TranslatePipe, TranslateDirective],
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

  changeLanguage(language: string) {
    this.translate.use(language);
  }

}
