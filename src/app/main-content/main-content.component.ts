import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from "./about/about.component";

@Component({
  selector: 'app-main-content',
  imports: [HeroComponent, NavbarComponent, AboutComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
