import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

type Reference = {
  nameKey: string;
  projectKey: string;
  reviewKey: string;
  linkedinUrl: string;
};

@Component({
  selector: 'app-references-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './references-section.component.html',
  styleUrl: './references-section.component.scss'
})
export class ReferencesSectionComponent {

  references: Reference[] = [
    {
      nameKey: 'references.person1.name',
      projectKey: 'references.person1.project',
      reviewKey: 'references.person1.review',
      linkedinUrl: 'https://www.linkedin.com/in/jesse-lee-wauer-5aa0483a8/'
    },
    {
      nameKey: 'references.person2.name',
      projectKey: 'references.person2.project',
      reviewKey: 'references.person2.review',
      linkedinUrl: 'https://www.linkedin.com/in/jesse-lee-wauer-5aa0483a8/'
    },
    {
      nameKey: 'references.person3.name',
      projectKey: 'references.person3.project',
      reviewKey: 'references.person3.review',
      linkedinUrl: 'https://www.linkedin.com/in/jesse-lee-wauer-5aa0483a8/'
    }
  ];
}
