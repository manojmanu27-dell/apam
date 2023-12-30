import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  selectedIndex: number = 0;
  arr: any;
  constructor() {

  }

  ngOnInit() {
    this.arr = [
      {
        imageUrl: "../../../../assets/images/slideMenu/photo1.jpg",
        alt: "New Images"
      },
      {
        imageUrl: "../../../../assets/images/slideMenu/photo2.jpg",
        alt: "New Images"
      },
      {
        imageUrl: "../../../../assets/images/slideMenu/photo3.jpg",
        alt: "New Images"
      },
      {
        imageUrl: "../../../../assets/images/slideMenu/photo4.jpg",
        alt: "New Images"
      }
    ]
    // let int$ = interval(10000);
    // int$.subscribe(()=>{
    //   console.log("the selected index is",this.selectedIndex)
    //   this.selectedIndex = (this.selectedIndex + 1) % this.arr.length;
    // })

  }

  selectedImage(index: number) {
    this.selectedIndex = index;
    console.log("the selectedIndex is", this.selectedIndex)
  }
}
