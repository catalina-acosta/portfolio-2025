import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { TranslateService, TranslatePipe, LangChangeEvent } from '@ngx-translate/core';
import Aos from 'aos';
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
  private currentIndex = 0; // Track the current sentence being typed
  private index = 0; // Track the current character being typed
  private textsArray: string[] = []; // Store the sentences to type

  constructor(private translate: TranslateService) {
    Aos.init();
  }

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
    this.index = 0;
  }

  startTypingAnimation(): void {
    this.translate.get(['about.typingText1', 'about.typingText2']).subscribe(translations => {
      this.textsArray = [`${translations['about.typingText1']}|`, `${translations['about.typingText2']}|`];
      this.currentIndex = 0; // Start from the first sentence
      this.typeSentence();
    });
  }

  private typeSentence(): void {
    if (this.currentIndex >= this.textsArray.length) {
      this.currentIndex = 0; // Restart the animation from the first sentence
    }

    const text = this.textsArray[this.currentIndex];
    this.resetTypingAnimation();
    this.typeCharacter(text);
  }

  private typeCharacter(text: string): void {
    const typingTextElement = document.getElementById('typing-text');
    const typingTextElementBlue = document.getElementById('typing-text-blue');
    const typingIcon = document.getElementById("typingIcon");

    if (this.index < 5) {
      if (this.index === 0) {
        typingIcon!.innerHTML += this.currentIndex === 0
          ? `<img class="icon-desktop" src="./assets/graphics/about/Group 60.svg" alt="">`
          : `<img class="icon-desktop" src="./assets/graphics/about/Icon Remote.svg" alt="">`;
      }
      typingTextElementBlue!.innerHTML += text.charAt(this.index);
    } else if (this.index >= 4 && this.index < text.length) {
      typingTextElement!.innerHTML += text.charAt(this.index);
    }

    this.index++;

    if (this.index < text.length) {
      this.typingTimeout = setTimeout(() => this.typeCharacter(text), 100);
    } else {
      this.untypingTimeout = setTimeout(() => this.untypeCharacter(), 1000);
    }
  }

  private untypeCharacter(): void {
    const typingTextElement = document.getElementById('typing-text');
    const typingTextElementBlue = document.getElementById('typing-text-blue');
    const typingIcon = document.getElementById("typingIcon");

    if (this.index > 4) {
      typingTextElement!.innerHTML = typingTextElement!.innerHTML.slice(0, -1);
    } else if (this.index > 0) {
      typingTextElementBlue!.innerHTML = typingTextElementBlue!.innerHTML.slice(0, -1);
    }

    this.index--;

    if (this.index > 0) {
      this.untypingTimeout = setTimeout(() => this.untypeCharacter(), 100);
    } else {
      typingIcon!.innerHTML = "";
      this.currentIndex++;
      this.typingTimeout = setTimeout(() => this.typeSentence(), 1000); // Start the next sentence
    }
  }
}