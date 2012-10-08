import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {
  inst = []
 
  constructor(private configService: ConfigService) {
    configService.getInstitutes()
      .subscribe(data => this.inst = data)
      
  }
  getInstitutes() {
    return this.inst;
  }
}
