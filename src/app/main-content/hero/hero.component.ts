import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  hovered: boolean = false;
  hoveredIcon: string = '';

  isHovered(hoverStatus: boolean) {
    this.hovered = hoverStatus;
  }


  onMouseEnter(icon: string) {
    this.hoveredIcon = icon;
  }

  onMouseLeave(icon: string) {
    this.hoveredIcon = '';
  }
}
