import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SortPopupComponent } from '../sort-popup/sort-popup.component';
import { FilterPopupComponent } from '../filter-popup/filter-popup.component';

@Component({
  selector: 'app-phants',
  templateUrl: './phants.component.html',
  styleUrls: ['./phants.component.css']
})
export class PhantsComponent {
  shirtsCategory: any;
  showNotch: boolean = false;
  addedToBag: boolean = false;
  constructor(private dialog: MatDialog, private sharedService: SharedService, private route: Router) { }

  ngOnInit() {

    let obj = {
      id: 1,
      productName: 'Casual Mens shirt',
      discountedPrice: 999,
      strikePrice: 1999,
      discountPercentage: 1000,
      image1: './assets/images/category/Shirts/Shirt1.webp',
      image2: './assets/images/category/Shirts/Shirt2.webp',
      showNotch: false,
      addedToBag: false
    }
    let obj1 = {
      id: 2,
      productName: 'Casual M2ens shirt',
      discountedPrice: 999,
      strikePrice: 1999,
      discountPercentage: 1000,
      image1: './assets/images/category/Shirts/Shirt1.webp',
      image2: './assets/images/category/Shirts/Shirt2.webp',
      showNotch: false,
      addedToBag: false
    }
    this.shirtsCategory = [obj, obj1, {
      id: 3,
      productName: 'Casual M2ens shirt',
      discountedPrice: 999,
      strikePrice: 1999,
      discountPercentage: 1000,
      image1: './assets/images/category/Shirts/Shirt1.webp',
      image2: './assets/images/category/Shirts/Shirt2.webp',
      showNotch: false,
      addedToBag: false
    }]
  }

  addToBagLocal(index: number) {
    this.shirtsCategory[index].showNotch = !this.shirtsCategory[index].showNotch;
    setTimeout(() => {
      this.shirtsCategory[index].showNotch = !this.shirtsCategory[index].showNotch;
    }, 500)
    this.shirtsCategory[index].addedToBag = !this.shirtsCategory[index].addedToBag;
    if (localStorage.getItem(this.shirtsCategory[index].id)) {
      console.log("Item is present", localStorage.getItem(this.shirtsCategory[index].id))
      localStorage.removeItem(this.shirtsCategory[index].id)
    } else {
      console.log('item is not present', localStorage.getItem(this.shirtsCategory[index].id))
      localStorage.setItem(this.shirtsCategory[index].id, this.shirtsCategory[index].id)
    }
    this.sharedService.bagLength = localStorage.length;

    console.log("the length of local storage is", localStorage.length)

  }


  openSortPopup() {
    this.dialog.open(SortPopupComponent, {
      width: '265px',
      height: '185px'
    })
  }

  openFilterPopup() {
    this.dialog.open(FilterPopupComponent)
  }

  openProduct(product: any) {
    this.route.navigateByUrl('/product')
  }
}
