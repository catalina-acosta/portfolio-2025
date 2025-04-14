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
    this.translate.get(['about.typingText1']).subscribe(translations => {
      const text = `${translations['about.typingText1']}|`;
      const typingTextElement = document.getElementById('typing-text');
      const typingTextElementBlue = document.getElementById('typing-text-blue');
      const typingIcon = document.getElementById("typingIcon");
      this.resetTypingAnimation();

      let index = 0;

      const type = () => {
        if (index < 5) {
          if (index === 0) {
            typingIcon!.innerHTML += `<img class="icon-desktop" src="./assets/graphics/about/Group 60.svg" alt="">`;
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
          this.typingTimeout = setTimeout(type, 1000);
        }
      };

      type();
    });
  }
}