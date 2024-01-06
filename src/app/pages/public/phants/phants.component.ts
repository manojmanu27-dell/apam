import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SortPopupComponent } from '../sort-popup/sort-popup.component';

@Component({
  selector: 'app-phants',
  templateUrl: './phants.component.html',
  styleUrls: ['./phants.component.css']
})
export class PhantsComponent {
  shirtsCategory: any;
  showNotch: boolean = false;
  addedToBag: boolean = false;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    let obj = {
      productName: 'Casual Mens shirt',
      discountedPrice: 999,
      strikePrice: 1999,
      discountPercentage: 1000,
      image1: '../../../../assets/images/category/Shirts/Shirt1.webp',
      image2: '../../../../assets/images/category/Shirts/Shirt2.webp',
      showNotch: false,
      addedToBag: false
    }
    let obj1 = {
      productName: 'Casual M2ens shirt',
      discountedPrice: 999,
      strikePrice: 1999,
      discountPercentage: 1000,
      image1: '../../../../assets/images/category/Shirts/Shirt1.webp',
      image2: '../../../../assets/images/category/Shirts/Shirt2.webp',
      showNotch: false,
      addedToBag: false
    }
    this.shirtsCategory = [obj, obj1, obj, obj1, obj, obj1, obj, obj1]
  }

  handleAnimation(index: number) {
    this.shirtsCategory[index].showNotch = !this.shirtsCategory[index].showNotch;
    setTimeout(() => {
      this.shirtsCategory[index].showNotch = !this.shirtsCategory[index].showNotch;
    }, 1000)
    this.shirtsCategory[index].addedToBag = !this.shirtsCategory[index].addedToBag;
    console.log(this, this.shirtsCategory)
  }

  openSortPopup() {
    this.dialog.open(SortPopupComponent, {
      width: '265px',
      height:'185px'
    })
  }
}
