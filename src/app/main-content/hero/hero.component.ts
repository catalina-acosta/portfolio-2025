import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  hovered: boolean = false;
  isHovered(hoverStatus: boolean) {
    this.hovered = hoverStatus;
    console.log(hoverStatus);
  }
}
