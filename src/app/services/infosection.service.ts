import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InfosectionService {

  info : Subject<string> = new BehaviorSubject<string>('');
 SHOW_INFO(str: string){
   this.info.next(str);
   console.log('worked',str)
 }
}
