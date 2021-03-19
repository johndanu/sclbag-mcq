import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {
  inst = []
  InstitutesList = [
    {
      "Name": "Jaffna Zone",
      "Id": "zone2",
      "About": "Jaffna zone in Nothern province.",
      "Address": "Jaffna,Nothern, SriLanka",
      "Exam": ["Term1", "Term2"]
    },
    {
      "Name": "Kandy Zone",
      "Id": "Zon11",
      "About": "Kandy zone in Central province.",
      "Address": "Jaffna,Nothern, SriLanka",
      "Exam": ["Term1", "Term2", "Misselenious"]
    }
  ]
  constructor(private configService: ConfigService) {
    configService.getInstitutes()
      .subscribe(data => this.inst = data)
      
  }
  getInstitutes() {
    return this.inst;
  }
}
