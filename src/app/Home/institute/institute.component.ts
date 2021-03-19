import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/config.service';
import { QuizService } from 'src/app/Quiz/quiz.service';
import { InstituteService } from '../institute.service';


@Component({
  selector: 'app-institute',
  templateUrl: './institute.component.html',
  styleUrls: ['./institute.component.css']
})
export class InstituteComponent implements OnInit {

  public showLoader = true;
  public institutes;
  constructor( private service_institute: InstituteService, 
    private _quizService:QuizService,
    private router:Router , private configService: ConfigService 
    ) { }

  ngOnInit(): void {
     this.configService.getInstitutes()
    .subscribe(data => {
      this.institutes = data
    this.showLoader = false
  })
  }


  OnClick(id,exam){
    console.log(id+exam);
    
    this._quizService.FilterQuiz(id,exam);
    this.router.navigate(['quiz'])
  }
}
