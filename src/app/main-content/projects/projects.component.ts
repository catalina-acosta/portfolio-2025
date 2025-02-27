import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-projects',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  currentProject: number = 0;
  projectList:{
    title: string; 
    contentPs: { sectionTitle: string; text: string}[];
    technologies: {name: string, url: string}[];
    img: string;
    github: string;
    liveTest: string;
  }[] = [
    {
      title: "Join",
      contentPs: [
        {
          sectionTitle: 'join.section1.sectionTitle',
          text: 'join.section1.text'
        },
        {
          sectionTitle: 'join.section2.sectionTitle',
          text: 'join.section2.text'        
        },
        {
          sectionTitle: 'join.section3.sectionTitle',
          text: 'join.section3.text'
        },
      ],
      technologies: [{name: "Angular", url:"./assets/graphics/projects/technologies/Angular (1).svg"}, 
        {name: "Typescript", url:"./assets/graphics/projects/technologies/Typescript.svg"}, 
        {name: "html", url:"./assets/graphics/projects/technologies/html (1).svg"} ,
        {name: "css", url: "./assets/graphics/projects/technologies/css (2).svg"},
                    ],
      img: "./assets/graphics/projects/Join.png",
      github: "https://github.com/catalina-acosta/sharky", 
      liveTest: "https://catalina-acosta-rivera.de/sharky"
    },
    {
      title: "Sharkie ",
      contentPs: [
        {
          sectionTitle: 'sharkie.section1.sectionTitle',
          text: 'sharkie.section1.text'
        },
        {
          sectionTitle: 'sharkie.section2.sectionTitle',
          text: 'sharkie.section2.text'        
        },
        {
          sectionTitle: 'sharkie.section3.sectionTitle',
          text: 'sharkie.section3.text'
        },
      ],
      technologies: [
        {name: "JavaScript", url:"./assets/graphics/projects/technologies/Javascript (1).svg"}, 
        {name: "html", url:"./assets/graphics/projects/technologies/html (1).svg"} ,
        {name: "css", url: "./assets/graphics/projects/technologies/css (2).svg"},
                    ],
      img: "./assets/graphics/projects/sharkie.png", 
      github: "https://github.com/catalina-acosta/sharky",
      liveTest: "https://catalina-acosta-rivera.de/sharky",  
    }
  ];

  setCurrentProject(index: number) {
    this.currentProject = index;
  };

  getTechnologiesString(): string {
    return this.projectList[this.currentProject].technologies.map(tech => tech.name).join(', ');
  }
}
