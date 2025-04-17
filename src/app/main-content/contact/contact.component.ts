import { Component } from '@angular/core';
import { ContactFormComponent } from "./contact-form/contact-form.component";
import {TranslatePipe} from "@ngx-translate/core";
import Aos from 'aos';

@Component({
  selector: 'app-contact',
  imports: [ContactFormComponent, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor() {
    Aos.init();
  }
}
