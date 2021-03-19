import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  QuizList2 = [
    {
      "InstituteName": "Jaffna Zone",
      "InstituteID": "Zon12",
      "Subject": "Tamil",
      "SubjectId": "Sub18",
      "QuizID": "qui0001",
      "Term": "Term1",
      "Questions": [
        {
          "Question": "\"பண்டே பழகி இருந்தாலும் அறியார் புல்லர்\" - இங்கு <b>பண்டு</b> என்பது.",
          "Answer": ["அன்பு", "முன்பு", "பின்பு", "வன்பு"],
          "CorrectAnswer": 2
        },
        {
          "Question": "\"வெகுளி பொங்கிப் பகைவரை நிந்திப்பார்...\" இங்கு <b>வெகுளி</b> என்பது.",
          "Answer": ["அமைதி", "மனம்", "கோபம்", "சாந்தம்"],
          "CorrectAnswer": 3
        },
        {
          "Question": "\"சுற்றத்தார் தேவரொமும் தொழநின்ற கோசலை...\" இங்கு <b>சுற்றத்தார்</b> என்பதன் எதிர்க்கருத்துள்ள சொல்",
          "Answer": ["பகைவர்", "நகைப்பவர்", "நண்பர்", "உறவினர்"],
          "CorrectAnswer": 1
        },
        {
          "Question": "\"படர் எல்லாம் படைத்தானை\" இங்கு <b>படர்</b> என்பதன் எதிர்க்கருத்துள்ள சொல்.",
          "Answer": ["துன்பம்", "இன்பம்", "வறுமை", "செல்வம்"],
          "CorrectAnswer": 2
        },
        {
          "Question": "\"கிம்புரியின் கொம்பொடித்து வெம்பு தினை இடிப்போம்\" இங்கு <b>கிம்புரி</b> என்று சுட்டப்படுவது.",
          "Answer": ["மான்", "சிங்கம்", "மாடு", "யானை"],
          "CorrectAnswer": 4
        }
      ]
    },
    {
      "InstituteName": "Kandy Zone",
      "InstituteID": "Zon11",
      "Subject": "Tamil",
      "SubjectId": "Sub18",
      "QuizID": "qui0001",
      "Term": "Term1",
      "Questions": [
        {
          "Question": "What is capital of SriLanka",
          "Answer": ["Jaffna", "Trinco", "Colombo", "Anuradhapura"],
          "CorrectAnswer": 2
        },
        {
          "Question": "Who is the president of Srilanka",
          "Answer": ["Trump", "Seylon", "Mahinda", "Godapaya"],
          "CorrectAnswer": 3
        },
        {
          "Question": "இலங்கையின் தலைநகரம் எது?",
          "Answer": ["யாழ்ப்பாணம்", "கொழும்பு", "திருகோணமலை", "காலி"],
          "CorrectAnswer": 1
        },
        {
          "Question": "When did SriLanka got independant",
          "Answer": ["1995", "2004", "2005", "1948"],
          "CorrectAnswer": 4
        }
      ]
    }
  ]
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
