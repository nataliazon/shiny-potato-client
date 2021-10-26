import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-just-one',
  templateUrl: './just-one.component.html',
  styleUrls: ['./just-one.component.scss']
})
export class JustOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  backToGameSelection(){
    console.log("Back to game selection");
  }
}
