import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

type Skill = { src: string; label: string };

@Component({
  selector: 'app-my-skills-section',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './my-skills-section.component.html',
  styleUrl: './my-skills-section.component.scss'
})

export class MySkillsSectionComponent {
  skills: Skill[] = [
    { src: 'assets/img/myskills/angular-icon.png', label: 'Angular' },
    { src: 'assets/img/myskills/typescript-icon.png', label: 'TypeScript' },
    { src: 'assets/img/myskills/javascript-icon.png', label: 'JavaScript' },
    { src: 'assets/img/myskills/html-icon.png', label: 'HTML' },
    { src: 'assets/img/myskills/css-icon.png', label: 'CSS' },
    { src: 'assets/img/myskills/api-icon.png', label: 'REST-API' },
    { src: 'assets/img/myskills/firebase-icon.png', label: 'Firebase' },
    { src: 'assets/img/myskills/git-icon.png', label: 'Git' },
    { src: 'assets/img/myskills/scrum-icon.png', label: 'Scrum' }
  ];

  learning: Skill[] = [
    { src: 'assets/img/myskills/react-icon.png', label: 'React' },
    { src: 'assets/img/myskills/vue-icon.png', label: 'Vue.js' }
  ];
}
