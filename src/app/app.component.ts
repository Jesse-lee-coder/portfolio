import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FooterComponent } from './footer/footer.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslateModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'portfolio';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setFallbackLang('de');

    const savedLang = localStorage.getItem('lang');
    const browserLang = this.translate.getBrowserLang();

    const initialLang =
      savedLang ||
      (browserLang?.match(/de|en/) ? browserLang : 'de');

    this.translate.use(initialLang);
  }
}
