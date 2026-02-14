import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-why-me-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './why-me-section.component.html',
  styleUrl: './why-me-section.component.scss'
})
export class WhyMeSectionComponent {}
