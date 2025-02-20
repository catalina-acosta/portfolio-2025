import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  refList: {name: string; project: string; refText: string; linkein: string}[] = [
    {name: "Caryen Song", 
      project: "Join", 
      refText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure illum magnam nisi facilis amet laudantium dolor esse necessitatibus! Ex, sed assumenda numquam doloribus placeat quidem voluptatem illum. debitis doloremque molestias.",
      linkein: "#"
    },
    {name: "Caryen Song", 
      project: "Join", 
      refText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure illum magnam nisi facilis amet laudantium dolor esse necessitatibus! Ex, sed assumenda numquam doloribus placeat quidem voluptatem illum. debitis doloremque molestias.",
      linkein: "#"
    },
    {name: "Caryen Song", 
      project: "Join", 
      refText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure illum magnam nisi facilis amet laudantium dolor esse necessitatibus! Ex, sed assumenda numquam doloribus placeat quidem voluptatem illum. debitis doloremque molestias.",
      linkein: "#"
    },
  ]
}
