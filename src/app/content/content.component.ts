import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {


  constructor() { }


imagelist:string[] = ["side_1.png","side_2.png","side_3.png","side_4.png","side_5.png","side_6.png"];
diceFace:string = "stupid.jpg";

  ngOnInit(): void {
  }


selectPic() {
this.diceFace = this.imagelist[Math.floor(Math.random()*6)];

}



  
}
