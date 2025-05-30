import { Component } from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import Aos from 'aos';

@Component({
  selector: 'app-references',
  imports: [TranslatePipe],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  refList: {name: string; project: string; refText: string; linkedin: string; hovered: boolean}[] = [
    {name: 'references.reference1Name',
      project: "Join", 
      refText: 'references.reference1',      
      linkedin: "https://www.linkedin.com/in/caryen-song-b6b913317/",
      hovered: false,
    },
    {name: 'references.reference2Name', 
      project: "Join", 
      refText: 'references.reference2',
      linkedin: "https://www.linkedin.com/in/barbora-lambeinova-33706a35a/",
      hovered: false,
    },
    {name: 'references.reference3Name', 
      project: "Join", 
      refText: 'references.reference3',      
      linkedin: "#",
      hovered: false,
    },
  ];

  constructor() {
    Aos.init();
  }

  toggleHovered(hoverStatus:  boolean, index: number) {
    this.refList[index].hovered = hoverStatus;
  }
}
