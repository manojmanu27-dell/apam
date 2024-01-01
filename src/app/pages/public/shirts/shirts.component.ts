import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {
  @HostListener('window:resize')
  windowResied() {
    console.log("window is resized", window.innerWidth);
    if (window.innerWidth <= 750) {
      this.showRupee = false
    }
  }
  showRupee: Boolean = true;
  selected: string = 'recommended';
  shirtsCategory: any;

  ngOnInit(): void {
    if (window.innerWidth <= 750) {
      this.showRupee = false
    }
    let obj = {
      productName: 'Casual Mens Tshirt',
      discountedPrice: 999,
      strikePrice: 1999,
      discountPercentage: 1000,
      imageUrl: './assets/images/tshirt.jpg'

    }
    this.shirtsCategory = [obj, obj, obj, obj, obj, obj, obj, obj, obj]
  }

  sortBy() {
    console.log("the selected option is", this.selected)
  }
}
