import { Component, OnInit, AfterViewInit } from '@angular/core';
import {TranslateService, TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-about',
  imports: [TranslatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, AfterViewInit {
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    // Any initialization logic can go here
  }

  ngAfterViewInit(): void {
    this.startTypingAnimation();
  }

  startTypingAnimation(): void {
    this.translate.get(['about.span', 'about.location']).subscribe(translations => {
      const text = `${translations['about.span']}${translations['about.location']}|`;
      const typingTextElement = document.getElementById('typing-text');
      // noch eine Span hinzufügen text white 
      let index = 0;

      const type = () => {
        // noch eine condition if text.lenght < 4 reder text in text white span
        if (index < text.length) { // else if this: 
          typingTextElement!.innerHTML += text.charAt(index);
          index++;
          setTimeout(type, 100); // Adjust the speed of typing here
        } else {
          setTimeout(untype, 1000); // Start untyping after a delay
        }
      };

      const untype = () => {
        if (index > 0) {
          typingTextElement!.innerHTML = typingTextElement!.innerHTML.slice(0, -1);
          index--;
          setTimeout(untype, 100); // Adjust the speed of untyping here
        } else {
          setTimeout(type, 1000); // Start typing again after a delay
        }
      }

      type();
    });
  }
}
