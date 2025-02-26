import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  http = inject(HttpClient);

  contactData: {name: string; email: string; message:string } = {
    name: "",
    email: "",
    message: "",
  }

  privacyPolicyChecked: boolean = false;

  mailTest = true;

  formSubmitted = false;

  post = {
    endPoint: 'https://portfolio.talentcol.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  togglePrivacyPolicyChecked() {
    this.privacyPolicyChecked = !this.privacyPolicyChecked;
  }

  isFormSubmitted() {
    this.formSubmitted = true;
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log('Form submitted');
      ngForm.resetForm();
      this.formSubmitted = false;
    }
  }
}
