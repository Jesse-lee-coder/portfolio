import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})

export class HeroSectionComponent {}
