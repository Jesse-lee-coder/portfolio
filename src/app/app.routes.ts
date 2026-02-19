import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: '**', redirectTo: '' }
];
