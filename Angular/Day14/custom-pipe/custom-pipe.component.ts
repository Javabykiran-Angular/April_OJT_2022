import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  strDetails:string="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint enim accusamus, commodi consectetur veritatis maxime beatae corrupti ullam, repellendus qui deserunt iusto nam labore tenetur dolorum quam nihil laudantium rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint enim accusamus, commodi consectetur veritatis maxime beatae corrupti ullam, repellendus qui deserunt iusto nam labore tenetur dolorum quam nihil laudantium rerum.";
  constructor() { }

  ngOnInit() {
  }

}
