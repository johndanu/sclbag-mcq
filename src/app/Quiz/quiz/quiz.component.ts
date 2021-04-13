import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { QuizService } from '../quiz.service';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  public totalQuiz;
  public sampleQuiz
  public i: number;
  public lastQuestion: boolean = false;
  public hi = true

  constructor(
    public quizService: QuizService,
    private router: Router,
    private resultService: ResultService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.sampleQuiz = this.quizService.SampleQuiz
    this.i = 0;
    this.resultService.correctAnswers = 0;
    this.resultService.totalQuestions = 0;
    // this.totalQuiz = Array(this.quizService.SampleQuiz.Questions.length)

  }

  Add() {
    this.i = this.i + 1;
    if (this.i < this.sampleQuiz.Questions.length - 1) {
      this.lastQuestion = false;
    } else {
      this.lastQuestion = true
      this.resultService.examAttended = true
    }

  };
  AnswerSelected(a, b) {
    this.resultService.CheckAnswer(a, b)
    if (!this.lastQuestion) {
      this.Add()
    } else {
      this.router.navigate(['my-result'])
    }

  }
}
