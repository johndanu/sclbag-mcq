import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/Quiz/quiz.service';
import { InstituteService } from '../institute.service';


@Component({
  selector: 'app-institute',
  templateUrl: './institute.component.html',
  styleUrls: ['./institute.component.css']
})
export class InstituteComponent implements OnInit {

  public institutes;
  constructor( private service_institute: InstituteService, 
    private _quizService:QuizService,
    private router:Router 
    ) { }

  ngOnInit(): void {
    this.institutes = this.service_institute.getInstitutes()
  }

  OnClick(id,exam){
    this._quizService.FilterQuiz(id,exam);
    this.router.navigate(['quiz'])
  }
}
