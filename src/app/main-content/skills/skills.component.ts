import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillsList:{name: string; imgPath: string}[] = [
    {name: "Angular", imgPath: "./assets/graphics/skills/skill-icons/Angular.svg"},
    {name: "TypeScript", imgPath: "./assets/graphics/skills/skill-icons/Typescript.svg"},
    {name: "JavaScript", imgPath: "./assets/graphics/skills/skill-icons/Javascript.svg"},
    {name: "HTML", imgPath: "./assets/graphics/skills/skill-icons/html.svg"},
    {name: "CSS", imgPath: "./assets/graphics/skills/skill-icons/css.svg"},
    {name: "Rest-API", imgPath: "./assets/graphics/skills/skill-icons/Api.svg"},
    {name: "Firebase", imgPath: "./assets/graphics/skills/skill-icons/Firebase.svg"},
    {name: "GIT", imgPath: "./assets/graphics/skills/skill-icons/git.svg"},
    {name: "Material Design", imgPath: "./assets/graphics/skills/skill-icons/MaterialDesign.svg"},
    {name: "Scrum", imgPath: "./assets/graphics/skills/skill-icons/scrum.svg"},
  ]
}
