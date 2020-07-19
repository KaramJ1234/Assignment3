import { Component } from '@angular/core';
import {Student} from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title="thetit";
 
  description = 'Assignment3Karam';
  bio:Student= {sid:991000000, sname: "John Fuck",scampus: "Davis", slogin: "doej"};
}


