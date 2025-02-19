import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  hoveredIcon: string = '';

  onMouseEnter(icon: string) {
    this.hoveredIcon = icon;
  }

  onMouseLeave(icon: string) {
    this.hoveredIcon = '';
  }
}
