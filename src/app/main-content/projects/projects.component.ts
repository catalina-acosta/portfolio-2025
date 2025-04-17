import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslatePipe} from "@ngx-translate/core";
import Aos from 'aos';

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
    duration: string;
    contentPs: { sectionTitle: string; duration: string; text: string}[];
    technologies: {name: string, url: string}[];
    img: string;
    github: string;
    liveTest: string;
  }[] = [
    {
      title: "Join",
      duration: "join.duration",
      contentPs: [
        {
          sectionTitle: 'join.section1.sectionTitle',
          duration: "join.duration",
          text: 'join.section1.text'
        },
        {
          sectionTitle: 'join.section2.sectionTitle',
          duration: "",
          text: 'join.section2.text'        
        },
        {
          sectionTitle: 'join.section3.sectionTitle',
          duration: "",
          text: 'join.section3.text'
        },
      ],
      technologies: [{name: "Angular", url:"./assets/graphics/projects/technologies/Angular (1).svg"}, 
        {name: "Typescript", url:"./assets/graphics/projects/technologies/Typescript.svg"}, 
        {name: "html", url:"./assets/graphics/projects/technologies/html (1).svg"} ,
        {name: "css", url: "./assets/graphics/projects/technologies/css (2).svg"},
                    ],
      img: "./assets/img/join.png",
      github: "https://github.com/catalina-acosta/join", 
      liveTest: "https://join.catalina-acosta-rivera.de/"
    },
    {
      title: "Sharky",
      duration: "sharkie.duration",
      contentPs: [
        {
          sectionTitle: 'sharkie.section1.sectionTitle',
          duration: "sharkie.duration",
          text: 'sharkie.section1.text'
        },
        {
          sectionTitle: 'sharkie.section2.sectionTitle',
          duration: "",
          text: 'sharkie.section2.text'        
        },
        {
          sectionTitle: 'sharkie.section3.sectionTitle',
          duration: "",
          text: 'sharkie.section3.text'
        },
      ],
      technologies: [
        {name: "JavaScript", url:"./assets/graphics/projects/technologies/Javascript (1).svg"}, 
        {name: "html", url:"./assets/graphics/projects/technologies/html (1).svg"} ,
        {name: "css", url: "./assets/graphics/projects/technologies/css (2).svg"},
                    ],
      img: "./assets/img/sharky.png", 
      github: "https://github.com/catalina-acosta/sharky",
      liveTest: "https://catalina-acosta-rivera.de/sharky",  
    },
    {
      title: "Pokédex",
      duration: "pokedex.duration",
      contentPs: [
        {
          sectionTitle: 'pokedex.section1.sectionTitle',
          duration: "pokedex.duration",
          text: 'pokedex.section1.text'
        },
        {
          sectionTitle: 'pokedex.section2.sectionTitle',
          duration: "",
          text: 'pokedex.section2.text'        
        },
        {
          sectionTitle: 'pokedex.section3.sectionTitle',
          duration: "",
          text: 'pokedex.section3.text'
        },
      ],
      technologies: [
        {name: "JavaScript", url:"./assets/graphics/projects/technologies/Javascript (1).svg"}, 
        {name: "html", url:"./assets/graphics/projects/technologies/html (1).svg"} ,
        {name: "css", url: "./assets/graphics/projects/technologies/css (2).svg"},
                    ],
      img: "./assets/img/pokedex.png", 
      github: "https://github.com/catalina-acosta/pokedex",
      liveTest: "https://catalina-acosta-rivera.de/pokedex",  
    }
  ];
  constructor() {
    Aos.init();
  }

  setCurrentProject(index: number) {
    this.currentProject = index;
  };

  getTechnologiesString(): string {
    return this.projectList[this.currentProject].technologies.map(tech => tech.name).join(', ');
  }
}
