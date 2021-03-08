import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {
  InstitutesList = [
    {
      "Name":"Jaffna Zone",
      "Id":"Zon12",
      "About":"Jaffna zone in Nothern province.",
      "Address": "Jaffna,Nothern, SriLanka",
      "Exam":["Term1","Term2"]
    },
    {
      "Name":"Kandy Zone",
      "Id":"Zon11",
      "About":"Kandy zone in Central province.",
      "Address": "Jaffna,Nothern, SriLanka",
      "Exam":["Term1","Term2","Misselenious"]
    }
  ]
  constructor() { }
  getInstitutes(){
    return this.InstitutesList;
  }
}
