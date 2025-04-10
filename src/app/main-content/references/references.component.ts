import { Component } from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";

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
      linkedin: "#",
      hovered: false,
    },
    {name: 'references.reference2Name', 
      project: "Join", 
      refText: 'references.reference2',
      linkedin: "#",
      hovered: false,
    },
    {name: 'references.reference3Name', 
      project: "Join", 
      refText: 'references.reference2',      
      linkedin: "#",
      hovered: false,
    },
  ];

  toggleHovered(hoverStatus:  boolean, index: number) {
    this.refList[index].hovered = hoverStatus;
  }
}
