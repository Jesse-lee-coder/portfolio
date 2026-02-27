import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ContactformComponent } from './contactform/contactform.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-me-section',
  standalone: true,
  imports: [CommonModule, TranslateModule, ContactformComponent, RouterModule],
  templateUrl: './contact-me-section.component.html',
  styleUrl: './contact-me-section.component.scss'
})
export class ContactMeSectionComponent {}

