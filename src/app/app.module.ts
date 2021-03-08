import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './Quiz/quiz/quiz.component';
import { ResultComponent } from './Quiz/result/result.component';
import { NavbarComponent } from './BasicComponents/navbar/navbar.component';

import { InstituteService } from './Home/institute.service';
import { QuizService } from './Quiz/quiz.service';
import { ResultService } from './Quiz/result.service';

import { InstituteComponent } from './Home/institute/institute.component';
import { HomeComponent } from './Home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    NavbarComponent,
    HomeComponent,
    QuizComponent,
    InstituteComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    //InstituteService,
    QuizService,
    ResultService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
