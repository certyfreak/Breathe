import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfosectionService } from 'src/app/services/infosection.service';
import { INFO } from './INFO';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.sass']
})
export class InfoComponent implements OnInit {

  constructor(
    public router : Router,
   public info_sec : InfosectionService
  ) { }

  info_to_show : INFO  ={
    equal : false,
    square : false,
    mode : false,
    test : false
  }

  clicked_info : string =  ""

  ngOnInit() {
    console.log('ok')
    let clicked_info : string = ' ';
    
    this.info_sec.info.subscribe((str : string)=>{
    clicked_info = str;
    this.clicked_info = clicked_info

    })
    switch (clicked_info) {
      case "equal":
        this.info_to_show.equal = true;
        this.info_to_show.square = false;
        this.info_to_show.mode = false;
        this.info_to_show.test = false;
        console.log(clicked_info,'wokred')
        break;
      case "square":
        this.info_to_show.square = true;
        this.info_to_show.equal = false;
        this.info_to_show.mode = false;
        this.info_to_show.test = false;
        break;
      case "mode":
        this.info_to_show.mode = true;
        this.info_to_show.equal = false;
        this.info_to_show.square = false;
        break;
      case "test":
        break;
    }
  }
  exit(){
    this.router.navigateByUrl('/home')
  }
}
