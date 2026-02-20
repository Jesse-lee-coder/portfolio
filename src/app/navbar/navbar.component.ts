import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule, NavbarMenuComponent ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {

  currentLang: string;

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.getCurrentLang() || 'de';
  }

  toggleTranslation(language: string) {
    this.translate.use(language);
    this.currentLang = this.translate.getCurrentLang();
  }
}

