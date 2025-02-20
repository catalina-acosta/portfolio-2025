import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projectList:{
    title: string; 
    content: { sectionTitle: string; text: string}[];
    technologies: string[];
    img: string;
  }[] = [
    {
      title: "Join",
      content: [
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
      technologies: ["./assets/graphics/projects/technologies/Angular (1).svg", "./assets/graphics/projects/technologies/Typescript.svg", 
                      "./assets/graphics/projects/technologies/html (1).svg", "./assets/graphics/projects/technologies/css (2).svg"
                    ],
      img: "./assets/graphics/projects/Join.png" 
    },
    {
      title: "Sharkie ",
      content: [
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
      technologies: ["./assets/graphics/projects/technologies/Angular (1).svg", "./assets/graphics/projects/technologies/Typescript.svg", 
                      "./assets/graphics/projects/technologies/html (1).svg", "./assets/graphics/projects/technologies/css (2).svg"
                    ],
      img: "./assets/graphics/projects/sharkie.png" 
    },
    {
      title: "Join",
      content: [
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
      technologies: ["./assets/graphics/projects/technologies/Angular (1).svg", "./assets/graphics/projects/technologies/Typescript.svg", 
                      "./assets/graphics/projects/technologies/html (1).svg", "./assets/graphics/projects/technologies/css (2).svg"
                    ],
      img: "./assets/graphics/projects/Join.png"  
    },
    {
      title: "Join",
      content: [
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
      technologies: ["./assets/graphics/projects/technologies/Angular (1).svg", "./assets/graphics/projects/technologies/Typescript.svg", 
                      "./assets/graphics/projects/technologies/html (1).svg", "./assets/graphics/projects/technologies/css (2).svg"
                    ],
      img: "./assets/graphics/projects/Join.png"
    },
  ]
}
