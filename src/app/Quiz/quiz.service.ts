import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

   public QuizList = []
  public SampleQuiz = null;

  constructor(private router: Router, private toastr: ToastrService, private configService: ConfigService) {
    this.configService.getQuizes()
      .subscribe(data => this.QuizList = data)
  }



  FilterQuiz(id, Exam) {
    this.SampleQuiz = this.QuizList.find((name) => { return name.InstituteID == id && name.Term == Exam })
    // console.log(this.QuizList1);
     
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.SampleQuiz != null) {
      return true;
    } else {
      this.router.navigate(['institutes']);
      this.toastr.info('Please Select A Quiz to continue', 'Select a Quiz', {
        positionClass: "toast-bottom-right"
      })
      return false;
    }
  }
}
