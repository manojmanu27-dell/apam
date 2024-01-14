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
  sortOderType: string = 'Recommended';

  constructor(private dialog: MatDialog, public sharedService: SharedService, private route: Router) { }

  ngOnInit() {
    console.log("the local storage is ", this.sharedService.bagItems)
    let obj = {
      id: 45,
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
      id: 254,
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
      id: 453,
      productName: 'Casual M2ens shirt',
      discountedPrice: 999,
      strikePrice: 1999,
      discountPercentage: 1000,
      image1: './assets/images/category/Shirts/Shirt1.webp',
      image2: './assets/images/category/Shirts/Shirt2.webp',
      showNotch: false,
      addedToBag: false
    }, {
        id: 45334,
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
    let a = this.sharedService.getItem(this.shirtsCategory[index].id);
    console.log("Item is present", this.sharedService.bagItems)

    this.shirtsCategory[index].showNotch = !this.shirtsCategory[index].showNotch;
    setTimeout(() => {
      this.shirtsCategory[index].showNotch = !this.shirtsCategory[index].showNotch;
    }, 500)
    if (this.sharedService.getItem(this.shirtsCategory[index].id)) {
      this.sharedService.removeItem(this.shirtsCategory[index].id)
    } else {
      this.sharedService.setItem(this.shirtsCategory[index].id, JSON.stringify(this.shirtsCategory[index]))
    }
    console.log("the length of local storage is", localStorage.length,this.shirtsCategory[index])

  }


  openSortPopup() {
    const dialog = this.dialog.open(SortPopupComponent, {
      width: '265px',
      height: '185px',
      data: {
        type: this.sortOderType
      }
    })
    dialog.afterClosed().subscribe((value) => {
      console.log("the value is", value)
      this.sortOderType = value;
    })
  }

  openFilterPopup() {
    this.dialog.open(FilterPopupComponent)
  }

  openProduct(product: any) {
    this.route.navigateByUrl('/product')
  }
}
