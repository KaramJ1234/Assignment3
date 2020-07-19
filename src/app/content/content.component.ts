import { Component, OnInit,Input } from '@angular/core';
import {Student} from '../student'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
@Input() headerInfo: Student;

  constructor() { }
@Input() contentInfo: Student;
city: string = "Bramptpn";
imagelist:string[] = ["side_1.png","side_2.png","side_3.png","side_4.png","side_5.png","side_6.png"];
diceFace:string = this.imagelist[0];

  ngOnInit(): void {
  }
  clearCity() {this.city="";}

selectPic() {
this.diceFace = this.imagelist[Math.floor(Math.random()*6)];

}


  backCampus() {
    return this.city.toUpperCase() === "BRAMPTON"
    || this.city.toUpperCase() === "OAKVILLE" ? 'blue':'red';

  }
  
}
