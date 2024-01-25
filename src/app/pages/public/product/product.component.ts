import { MatNativeDateModule } from '@angular/material/core';
import { SharedService } from './../../../services/shared.service';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productObj: any;
  imageList: any[] = [];
  mainImage: any;
  sizeArr: any[] = [];
  panelOpenState = false;
  dataSource = new MatTableDataSource<any>;
  displayedColumns: string[] = ['brandSize','size','shoulder','chest']
  constructor(private sharedService: SharedService) { }
  ngOnInit() {
    // this.productObj = this.sharedService.productObj;
    this.productObj = {
      "id": 254,
      "productName": "Casual M2ens shirt",
      "productType": "Slim Fit Shirt with Design",
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
    this.dataSource.data = [
      {
        brandSize: 'XS',
        size: '36',
        shoulder: '16',
        chest: '40'
      }, {
        brandSize: 'S',
        size: '38',
        shoulder: '17',
        chest: '42'
      }, {
        brandSize: 'M',
        size: '40',
        shoulder: '18',
        chest: '44'
      }, {
        brandSize: 'L',
        size: '42',
        shoulder: '19',
        chest: '46'
      }, {
        brandSize: 'XL',
        size: '44',
        shoulder: '20',
        chest: '49'
      }, {
        brandSize: 'XXL',
        size: '46',
        shoulder: '21',
        chest: '52'
      }
    ]
  }

  changeMainImg(image: any) {
    this.mainImage = image;
  }
}
