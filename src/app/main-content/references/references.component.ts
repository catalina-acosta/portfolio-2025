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
    {name: "Caryen Song", 
      project: "Join", 
      refText: "‘’Catalina had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person.’’",
      linkedin: "#",
      hovered: false,
    },
    {name: "Caryen Song", 
      project: "Join", 
      refText: 'contact.title',
      linkedin: "#",
      hovered: false,
    },
    {name: "Caryen Song", 
      project: "Join", 
      refText: "‘’ She is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code. ‘’",
      linkedin: "#",
      hovered: false,
    },
  ];

  toggleHovered(hoverStatus:  boolean, index: number) {
    this.refList[index].hovered = hoverStatus;
  }
}
