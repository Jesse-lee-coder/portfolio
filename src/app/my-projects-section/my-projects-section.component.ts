import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

type Project = {
  projectname: string;
  technologies: string;
  content: {
    aboutTheProject: string;
    organisation: string;
    whatILearned: string;
  };
  images: string[];
  imageProject: string;     
  github: string;
  livetest: string;
};

@Component({
  selector: 'app-my-projects-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-projects-section.component.html',
  styleUrl: './my-projects-section.component.scss'
})
export class MyProjectsSectionComponent {

  projects: Project[] = [
    {
      projectname: 'Join',
      technologies: 'HTML | CSS | JavaScript | Firebase',
      content: {
        aboutTheProject: 'myProjects.join.aboutTheProject',
        organisation: 'myProjects.join.organisation',
        whatILearned: 'myProjects.join.whatILearned'
      },
      images: [
        'assets/img/myprojects/html-icon.png',
        'assets/img/myprojects/css-icon.png',
        'assets/img/myprojects/javascript-icon.png',
        'assets/img/myprojects/firebase-icon.png'
      ],
      imageProject: 'assets/img/myprojects/join-project.png',
      github: 'https://github.com/Jesse-lee-coder/Join',
      livetest: 'https://jesse-lee-wauer.developerakademie.net/Join'
    },
    {
      projectname: 'El Pollo Loco',
      technologies: 'HTML | CSS | Canvas | OOP JavaScript',
      content: {
        aboutTheProject: 'myProjects.elPolloLoco.aboutTheProject',
        organisation: 'myProjects.elPolloLoco.organisation',
        whatILearned: 'myProjects.elPolloLoco.whatILearned'
      },
      images: [
        'assets/img/myprojects/html-icon.png',
        'assets/img/myprojects/css-icon.png',
        'assets/img/myprojects/javascript-icon.png'
      ],
      imageProject: 'assets/img/myprojects/el-pollo-loco-project.png',
      github: 'https://github.com/Jesse-lee-coder/2D-Game-El-Pollo-Loco',
      livetest: 'https://jesse-lee-wauer.developerakademie.net/El-Pollo-Projektarbeit'
    },
    {
      projectname: 'Pokedex',
      technologies: 'HTML | CSS | JavaScript | API',
      content: {
        aboutTheProject: 'myProjects.pokedex.aboutTheProject',
        organisation: 'myProjects.pokedex.organisation',
        whatILearned: 'myProjects.pokedex.whatILearned'
      },
      images: [
        'assets/img/myprojects/html-icon.png',
        'assets/img/myprojects/css-icon.png',
        'assets/img/myprojects/javascript-icon.png',
        'assets/img/myprojects/api-icon.png'
      ],
      imageProject: 'assets/img/myprojects/pokedex-project2.png',
      github: 'https://github.com/Jesse-lee-coder/pokeapp',
      livetest: 'https://jesse-lee-wauer.developerakademie.net/Pokedex'
    }
  ];

  activeIndex = 0;

  get activeProject(): Project {
    return this.projects[this.activeIndex];
  }

  setActive(index: number): void {
    this.activeIndex = index;
  }
}


