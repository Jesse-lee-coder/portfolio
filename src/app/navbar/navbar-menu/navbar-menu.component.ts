import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router, RouterModule } from '@angular/router';

type Lang = 'de' | 'en';

@Component({
  selector: 'app-navbar-menu',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './navbar-menu.component.html',
  styleUrl: './navbar-menu.component.scss',
})

export class NavbarMenuComponent implements OnDestroy {
  isOpen = false;
  private readonly iconDefault = 'assets/img/hero/burgermenu-default.png';
  private readonly iconBurger1 = 'assets/img/hero/burger1.png';
  private readonly iconBurger2 = 'assets/img/hero/burger2.png';
  private readonly iconClose = 'assets/img/hero/burgermenu-close.png';

  iconSrc = this.iconDefault;

  currentLang: Lang = 'de';

  private timers: number[] = [];

constructor(private translate: TranslateService, private router: Router) {
  const saved = (localStorage.getItem('lang') as Lang | null);
  const lang = (saved || (this.translate.getCurrentLang?.() || this.translate.defaultLang || 'de')) as Lang;
  this.currentLang = lang === 'en' ? 'en' : 'de';
}

  ngOnDestroy(): void {
    this.clearTimers();
    this.unlockScroll();
  }

  toggleMenu(): void {
    if (this.isOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenu(): void {
    this.clearTimers();
    this.isOpen = true;
    this.lockScroll();
    this.iconSrc = this.iconBurger1;

    this.timers.push(
      window.setTimeout(() => (this.iconSrc = this.iconBurger2), 10),
      window.setTimeout(() => (this.iconSrc = this.iconClose), 20)
    );
  }

  closeMenu(): void {
    this.clearTimers();
    this.iconSrc = this.iconBurger2;

    this.timers.push(
      window.setTimeout(() => (this.iconSrc = this.iconBurger1), 10),
      window.setTimeout(() => {
        this.iconSrc = this.iconDefault;
        this.isOpen = false;
        this.unlockScroll();
      }, 40)
    );
  }

  onNavigate(fragment: string): void {
    this.closeMenu();
    this.router.navigate(['/'], { fragment });
  }

  toggleTranslation(lang: Lang): void {
    this.translate.use(lang);
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
  }

  private lockScroll(): void {
    document.body.style.overflow = 'hidden';
  }

  private unlockScroll(): void {
    document.body.style.overflow = '';
  }

  private clearTimers(): void {
    this.timers.forEach((t) => clearTimeout(t));
    this.timers = [];
  }
}