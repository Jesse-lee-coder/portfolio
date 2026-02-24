import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { WhyMeSectionComponent } from '../why-me-section/why-me-section.component';
import { MySkillsSectionComponent } from '../my-skills-section/my-skills-section.component';
import { MyProjectsSectionComponent } from '../my-projects-section/my-projects-section.component';
import { ContactMeSectionComponent } from "../contact-me-section/contact-me-section.component";


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    HeroSectionComponent,
    WhyMeSectionComponent,
    MySkillsSectionComponent,
    MyProjectsSectionComponent,
    ContactMeSectionComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})

export class HomepageComponent {}
