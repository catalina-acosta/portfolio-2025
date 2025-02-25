import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
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
  }[] = [
    {
      title: "Join",
      contentPs: [
        {
          sectionTitle: "About the project",
          text: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. "
        },
        {
          sectionTitle: "How I have organized my work process",
          text: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. "
        },
        {
          sectionTitle: "My group work experience            ",
          text: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. "
        },
      ],
      technologies: [{name: "Angular", url:"./assets/graphics/projects/technologies/Angular (1).svg"}, 
        {name: "Typescript", url:"./assets/graphics/projects/technologies/Typescript.svg"}, 
        {name: "html", url:"./assets/graphics/projects/technologies/html (1).svg"} ,
        {name: "css", url: "./assets/graphics/projects/technologies/css (2).svg"},
                    ],
      img: "./assets/graphics/projects/Join.png" 
    },
    {
      title: "Sharkie ",
      contentPs: [
        {
          sectionTitle: "About the project",          
          text: "A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale."
        },
        {
          sectionTitle: "How I have organized my work process",
          text: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. "
        },
        {
          sectionTitle: "What have I learnt ",
          text: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. "
        },
      ],
      technologies: [{name: "Angular", url:"./assets/graphics/projects/technologies/Angular (1).svg"}, 
        {name: "Typescript", url:"./assets/graphics/projects/technologies/Typescript.svg"}, 
        {name: "html", url:"./assets/graphics/projects/technologies/html (1).svg"} ,
        {name: "css", url: "./assets/graphics/projects/technologies/css (2).svg"},
                    ],
      img: "./assets/graphics/projects/sharkie.png" 
    },
    {
      title: "Join",
      contentPs: [
        {
          sectionTitle: "About the project",
          text: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. "
        },
        {
          sectionTitle: "How I have organized my work process",
          text: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. "
        },
        {
          sectionTitle: "My group work experience            ",
          text: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. "
        },
      ],
      technologies: [{name: "Angular", url:"./assets/graphics/projects/technologies/Angular (1).svg"}, 
        {name: "Typescript", url:"./assets/graphics/projects/technologies/Typescript.svg"}, 
        {name: "html", url:"./assets/graphics/projects/technologies/html (1).svg"} ,
        {name: "css", url: "./assets/graphics/projects/technologies/css (2).svg"},
                    ],
      img: "./assets/graphics/projects/Join.png"  
    },
    {
      title: "Join",
      contentPs: [
        {
          sectionTitle: "About the project",
          text: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. "
        },
        {
          sectionTitle: "How I have organized my work process",
          text: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. "
        },
        {
          sectionTitle: "My group work experience            ",
          text: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. "
        },
      ],
      technologies: [{name: "Angular", url:"./assets/graphics/projects/technologies/Angular (1).svg"}, 
        {name: "Typescript", url:"./assets/graphics/projects/technologies/Typescript.svg"}, 
        {name: "html", url:"./assets/graphics/projects/technologies/html (1).svg"} ,
        {name: "css", url: "./assets/graphics/projects/technologies/css (2).svg"},
                    ],
      img: "./assets/graphics/projects/Join.png"
    },
  ];

  setCurrentProject(index: number) {
    this.currentProject = index;
  };

  getTechnologiesString(): string {
    return this.projectList[this.currentProject].technologies.map(tech => tech.name).join(', ');
  }
}
