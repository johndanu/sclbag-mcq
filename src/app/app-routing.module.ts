import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { InstituteComponent } from './Home/institute/institute.component';
import { LandingPageComponent } from './Home/landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuizService } from './Quiz/quiz.service';

import { QuizComponent } from './Quiz/quiz/quiz.component';
import { ResultService } from './Quiz/result.service';
import { ResultComponent } from './Quiz/result/result.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {path:'',component:LandingPageComponent},
      {path:'institutes', component:InstituteComponent}
    ]
  },
  {
    path: 'my-result',
    component: ResultComponent,
    canActivate: [ResultService]
  }, {
    path: 'quiz',
    component: QuizComponent,
    canActivate: [QuizService]
  }, {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
