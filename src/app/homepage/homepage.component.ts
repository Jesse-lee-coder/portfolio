import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { WhyMeSectionComponent } from '../why-me-section/why-me-section.component';
import { MySkillsSectionComponent } from '../my-skills-section/my-skills-section.component';
import { MyProjectsSectionComponent } from '../my-projects-section/my-projects-section.component';
import { ReferencesSectionComponent } from '../references-section/references-section.component';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    HeroSectionComponent,
    WhyMeSectionComponent,
    MySkillsSectionComponent,
    MyProjectsSectionComponent,
    ReferencesSectionComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})

export class HomepageComponent {}
