import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

cars = [
  {
    bName: "Volkswagen",
    year: 2020,
    fuel: "Diesel",
    image: "assets/img/volkswagen.jpg"
  },{
    bName: "Porsche",
    year: 2018,
    fuel: "Hybrid",
    image: "assets/img/porsche.png"
  },{
    bName: "Mercedes Benz",
    year: 2021,
    fuel: "Eletric",
    image: "assets/img/mercedes.jpg"
  }
];

  constructor() { }

  ngOnInit(): void {
  }
}
