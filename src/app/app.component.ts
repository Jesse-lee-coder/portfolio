import { Component, AfterViewInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
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
export class AppComponent implements AfterViewInit {
  title = 'portfolio';

  constructor(
    private translate: TranslateService,
    private viewportScroller: ViewportScroller
  ) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setFallbackLang('de');

    const savedLang = localStorage.getItem('lang');
    const browserLang = this.translate.getBrowserLang();

    const initialLang =
      savedLang ||
      (browserLang?.match(/de|en/) ? browserLang : 'de');

    this.translate.use(initialLang);
  }

  async ngAfterViewInit(): Promise<void> {
    const AOS = (await import('aos')).default;

    setTimeout(() => {
      AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-cubic',
        offset: 80,
      });

      setTimeout(() => this.scrollToCurrentHash(), 50);

      window.addEventListener('load', () => this.scrollToCurrentHash(), { once: true });
    }, 0);
  }

  private scrollToCurrentHash(): void {
    const hash = window.location.hash?.replace('#', '');
    if (!hash) return;
    this.viewportScroller.scrollToAnchor(hash);
  }
}
