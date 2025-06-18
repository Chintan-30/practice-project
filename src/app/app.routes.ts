import { Routes } from '@angular/router';
import { MyIntroduction } from '../my-introduction/my-introduction';
import { MyWorkComponent } from './my-work/my-work';
import { ResumeComponent } from './resume/resume';

export const routes: Routes = [
    { path: '', component: MyIntroduction },
    { path: 'my-work', component: MyWorkComponent },
    { path: 'resume', component: ResumeComponent },

];
