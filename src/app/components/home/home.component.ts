import { Component, OnInit } from '@angular/core';
import { InfosectionService } from 'src/app/services/infosection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(
    private info_Sec : InfosectionService
  ) { }

  equalBreath(){
    this.info_Sec.SHOW_INFO('equal')
  }

  squareBreath(){
    this.info_Sec.SHOW_INFO("square")
  }

  modeBreath(){
    this.info_Sec.SHOW_INFO("mode")
  }

  testBreath(){
    this.info_Sec.SHOW_INFO("test")
  }

  ngOnInit(): void {
  }

}
