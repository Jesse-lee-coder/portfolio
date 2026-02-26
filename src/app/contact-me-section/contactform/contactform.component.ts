import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, RouterLink],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {
  thankYouVisible = false;
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest = false;
  privacyAccepted = false;

  post = {
    endPoint: 'https://jesse-lee-wauer.developerakademie.net/portfolio-public/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

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

      ngForm.resetForm();
    }
  }

  private showThankYou(ms: number) {
    this.thankYouVisible = true;
    setTimeout(() => (this.thankYouVisible = false), ms);
  }

  getCheckboxImage(privacyRef: any): string {
    if (privacyRef.invalid && privacyRef.touched && !this.privacyAccepted) {
      return 'assets/img/contactme/checkbox-error.png';
    }
    if (this.privacyAccepted) {
      return 'assets/img/contactme/checkbox-checked.png';
    }
    return 'assets/img/contactme/checkbox-unchecked.png';
  }
}