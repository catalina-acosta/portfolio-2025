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
  }

  ngAfterViewInit(): void {
    this.startTypingAnimation();
  }

  startTypingAnimation(): void {
    this.translate.get(['about.typingText1']).subscribe(translations => {
      const text = `${translations['about.typingText1']}|`;
      const typingTextElement = document.getElementById('typing-text');
      const typingTextElementBlue = document.getElementById('typing-text-blue');
      // noch eine Span hinzufügen text white 
      let index = 0;
      // typingTextElementBlue!.innerHTML += `<img class="icon-mobile" src="./assets/graphics/about/remote_mobile.svg" alt="">`

      const type = () => {
        if (index < 5) {
          if(index == 0) {
            typingTextElementBlue!.innerHTML += `<img class="icon-mobile" src="./assets/graphics/about/remote_mobile.svg" alt="">`;
          }
          typingTextElementBlue!.innerHTML += text.charAt(index);
          index++;
          setTimeout(type, 100);
        }
        else if (index >= 4 && index < text.length) { // else if this: 
          typingTextElement!.innerHTML += text.charAt(index);
          index++;
          setTimeout(type, 100); // Adjust the speed of typing here
        } else {
          setTimeout(untype, 1000); // Start untyping after a delay
        }
      };

      const untype = () => {
        if (index > 4) {
          typingTextElement!.innerHTML = typingTextElement!.innerHTML.slice(0, -1);
          index--;
          setTimeout(untype, 100); // Adjust the speed of untyping here
        } else if(index > 0) {
          typingTextElementBlue!.innerHTML = typingTextElement!.innerHTML.slice(0, -1);
          index--;
          setTimeout(untype, 100); // Adjust the speed of untyping here
        }
        else {
          setTimeout(type, 1000); // Start typing again after a delay
        }
      }
      // typingTextElementBlue!.innerHTML = "";
      type();
    });
  }
}
function type() {
  throw new Error('Function not implemented.');
}

