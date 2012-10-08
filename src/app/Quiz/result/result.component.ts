import { Component, OnInit } from '@angular/core';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public TotalQuestions:number;
  public TotalMarks:number;
  public percentage:number;

  constructor(private resultService:ResultService) { }

  ngOnInit(): void {
    this.TotalMarks = this.resultService.correctAnswers
    this.TotalQuestions=this.resultService.totalQuestions
    this.percentage = Math.round((this.TotalMarks/this.TotalQuestions)*100)
  }


  //tooltips
  // $(function () {
  //   $('[data-toggle="tooltip"]').tooltip()
  //   })

}
