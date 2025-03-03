import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {TranslatePipe} from "@ngx-translate/core";
import { RouterModule } from '@angular/router';
import { DialogMessageComponent } from '../dialog-message/dialog-message.component';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule, CommonModule, TranslatePipe, RouterModule, DialogMessageComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  http = inject(HttpClient);
  contactData: {name: string; email: string; message:string } = {
    name: "",
    email: "",
    message: "",
  };
  showDialog: boolean = false;
  privacyPolicyChecked: boolean = false;
  mailTest = false;
  formSubmitted = false;

  post = {
    endPoint: 'https://catalina-acosta-rivera.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  closeDialog(): void {
      this.showDialog = false;
  }

  togglePrivacyPolicyChecked() {
    this.privacyPolicyChecked = !this.privacyPolicyChecked;
  }

  isFormSubmitted() {
    this.formSubmitted = true;
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest && this.privacyPolicyChecked) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          ngForm.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info(''),
      });
      this.showDialog = true;
      this.formSubmitted = false;
      this.privacyPolicyChecked = false;
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log('Form submitted');
      ngForm.resetForm();
    }
  }
}
