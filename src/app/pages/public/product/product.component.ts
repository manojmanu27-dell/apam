import { SharedService } from './../../../services/shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productObj: any;
  imageList: any[] = [];
  mainImage: any;
  constructor(private sharedService: SharedService) { }
  ngOnInit() {
    // this.productObj = this.sharedService.productObj;
    this.productObj = {
      "id": 254,
      "productName": "Casual M2ens shirt",
      "productType":"Slim Fit Shirt with Design",
      "discountedPrice": 999,
      "strikePrice": 1999,
      "discountPercentage": 1000,
      "image1": "./assets/images/category/Shirts/Shirt1.webp",
      "image2": "./assets/images/category/Shirts/Shirt2.webp",
      "image3": "./assets/images/category/Shirts/Shirt1.webp",
      "image4": "./assets/images/category/Shirts/Shirt2.webp",
      "showNotch": false,
      "addedToBag": false,
      "alt": "Shirt with checks"
    };
    console.log("inside product", this.sharedService.productObj)

    for (let key in this.productObj) {
      if (key.includes('image')) {
        this.imageList.push(this.productObj[key]);
      }
    }

    this.mainImage = this.productObj.image1;
  }

  changeMainImg(image: any) {
    this.mainImage = image;
  }
}
