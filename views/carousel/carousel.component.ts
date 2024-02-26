import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  slideConfig={
    slidesToShow:1,
    slidesToScroll:1,
    dots: true
  }
  images = [
    { img: "assets/img/recent-1.jpg" },
    { img: "assets/img/recent-2.jpg" },
    { img: "assets/img/recent-3.jpg" }
  ];

}
