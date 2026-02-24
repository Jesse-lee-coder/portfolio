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

  mailTest = true;
  privacyAccepted = false;

  post = {
    endPoint: 'https://jesse-lee-wauer.developerakademie.net/portfolio-public/sendMail.php', 
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: { 'Content-Type': 'text/plain' },
      responseType: 'text' as const
    }
  };

  onSubmit(ngForm: NgForm) {
    const isValid = ngForm.submitted && ngForm.form.valid && this.privacyAccepted;

    if (!isValid) return;

    if (!this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: () => {
            ngForm.resetForm();
            this.privacyAccepted = false;
            this.showThankYou(5000);
          },
          error: (error) => console.error('Fehler beim Senden:', error),
          complete: () => console.info('send post complete')
        });

      return;
    }

    ngForm.resetForm();
    this.privacyAccepted = false;
    this.showThankYou(4000);
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
