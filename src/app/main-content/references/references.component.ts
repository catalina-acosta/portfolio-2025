import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  refList: {name: string; project: string; refText: string; linkein: string; hovered: boolean}[] = [
    {name: "Caryen Song", 
      project: "Join", 
      refText: "‘’Catalina had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person.’’",
      linkein: "#",
      hovered: false,
    },
    {name: "Caryen Song", 
      project: "Join", 
      refText: "‘’Catalina is a reliable and friendly person. Works in a structured way and write a clear code. I recommend her as a colleague.’’",
      linkein: "#",
      hovered: false,
    },
    {name: "Caryen Song", 
      project: "Join", 
      refText: "‘’ She is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code. ‘’",
      linkein: "#",
      hovered: false,
    },
  ];

  toggleHovered(hoverStatus:  boolean, index: number) {
    this.refList[index].hovered = hoverStatus;
  }
}
