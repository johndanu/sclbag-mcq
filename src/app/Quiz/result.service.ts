import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
public totalQuestions:number =0;
public correctAnswers:number =0;
public examAttended:boolean= true; //have to change it to false
  constructor(private router:Router, private toastr:ToastrService) { }

  CheckAnswer(answer:number,correctanswer:number){
    if(answer==correctanswer){
      this.correctAnswers = this.correctAnswers+1;
      this.toastr.success( null,
        // 'Yes you have answered correctly for question '+(this.totalQuestions+1)+'!',
        'Correct Answer!',{
        positionClass:"toast-bottom-right", closeButton:true
      });
    }else(
      this.toastr.warning( null,
        // 'You have selected wrong Answer for quetion no. '+(this.totalQuestions+1)+'!',
        'Wrong Answer!',{
        positionClass:"toast-bottom-right", closeButton:true
      })
    )
    this.totalQuestions = this.totalQuestions+1;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.examAttended) {
      return true;
    } else {
      this.router.navigate(['quiz']);
      return false;
    }
  }
}
