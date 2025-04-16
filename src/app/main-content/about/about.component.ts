import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { TranslateService, TranslatePipe, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {
  private langChangeSubscription!: Subscription;
  private typingTimeout: ReturnType<typeof setTimeout> | undefined; // Correctly typed timeout reference
  private untypingTimeout: ReturnType<typeof setTimeout> | undefined;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.langChangeSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.resetTypingAnimation(); 
      this.startTypingAnimation();
    });
  }

  ngAfterViewInit(): void {
    this.startTypingAnimation();
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
    this.resetTypingAnimation();
  }

  resetTypingAnimation(): void {
    clearTimeout(this.typingTimeout);
    clearTimeout(this.untypingTimeout);

    const typingTextElement = document.getElementById('typing-text');
    const typingTextElementBlue = document.getElementById('typing-text-blue');
    const typingIcon = document.getElementById("typingIcon");
    if (typingTextElement) typingTextElement.innerHTML = '';
    if (typingTextElementBlue) typingTextElementBlue.innerHTML = '';
    if (typingIcon) typingIcon.innerHTML = '';
  }

  startTypingAnimation(): void {
    this.translate.get(['about.typingText1', 'about.typingText2']).subscribe(translations => {
      const textsArray = [`${translations['about.typingText1']}|`, `${translations['about.typingText2']}|`];
        const typingTextElement = document.getElementById('typing-text');
        const typingTextElementBlue = document.getElementById('typing-text-blue');
        const typingIcon = document.getElementById("typingIcon");
        let currentIndex = 0; // Track the current sentence being typed

        const typeSentence = () => {
          if (currentIndex >= textsArray.length) {
            currentIndex = 0; // Restart the animation from the first sentence
          }
    
          const text = textsArray[currentIndex];
        
        
        this.resetTypingAnimation();
  
        let index = 0;
  
        const type = () => {
          if (index < 5) {
            if (index === 0) {
              typingIcon!.innerHTML += currentIndex === 0 ? `<img class="icon-desktop" src="./assets/graphics/about/Group 60.svg" alt="">` : `<img class="icon-desktop" src="./assets/graphics/about/Icon Remote.svg" alt="">` ;
            }
            typingTextElementBlue!.innerHTML += text.charAt(index);
            index++;
            this.typingTimeout = setTimeout(type, 100);
          } else if (index >= 4 && index < text.length) {
            typingTextElement!.innerHTML += text.charAt(index);
            index++;
            this.typingTimeout = setTimeout(type, 100);
          } else {
            this.untypingTimeout = setTimeout(untype, 1000);
          }
        };
  
        const untype = () => {
          if (index > 4) {
            typingTextElement!.innerHTML = typingTextElement!.innerHTML.slice(0, -1);
            index--;
            this.untypingTimeout = setTimeout(untype, 100);
          } else if (index > 0) {
            typingTextElementBlue!.innerHTML = typingTextElementBlue!.innerHTML.slice(0, -1);
            index--;
            this.untypingTimeout = setTimeout(untype, 100);
          } else {
            typingIcon!.innerHTML = "";
            currentIndex++;
            this.typingTimeout = setTimeout(typeSentence, 1000);
          }
        };
  
        type();
      };

      typeSentence();
    });
  }
}