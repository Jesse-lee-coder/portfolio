import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule, NavbarMenuComponent, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {

  currentLang: string;

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.getCurrentLang() || 'de';

    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });
  }

  toggleTranslation(language: string) {
    this.translate.use(language);
    this.currentLang = language;
    localStorage.setItem('lang', language);
  }
}

