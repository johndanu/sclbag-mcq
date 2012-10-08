import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IQuiz } from './models/quiz';
import { Observable } from 'rxjs';
import { IInstitute } from './models/institute';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = 'http://localhost:9000'

  constructor(private http:HttpClient) { }

  getQuizes():Observable<IQuiz[]>{
    return this.http.get<IQuiz[]>(this.configUrl+'/quiz')
  }

  getInstitutes():Observable<IInstitute[]>{
    return this.http.get<IInstitute[]>(this.configUrl+'/institute')
  }

  getInstituteByID(id:string):Observable<IInstitute>{
    return this.http.get<IInstitute>(this.configUrl+'/'+id)
  }
}
