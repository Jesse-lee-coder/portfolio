import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { WhyMeSectionComponent } from '../why-me-section/why-me-section.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeroSectionComponent,WhyMeSectionComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {}
