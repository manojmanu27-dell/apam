import { SharedService } from '../../../services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items: any[] = [];
  loginType: string = 'signup';
  emailId!: string;
  password!: string;
  cnfPassword!: string;
  userOtp!: string;
  userName!: string;
  mobileNo!: string;
  doorNoOrStreetNo!: string;
  landMark!: string;
  colonyOrStreet!: string;
  pincode!: string;
  city!: string;
  state!: string;
  showSendOtp: Boolean = true;
  totalPrice: number = 0;
  discount: number = 0;
  shippingCharges: number = 80;
  subTotalPrice: number = 0;
  constructor(public sharedService: SharedService) {
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.items = Object.values(this.sharedService.bagItems)
    if (this.items.length > 0) {
      this.items = this.items.map(obj => {
        let b = JSON.parse(obj)
        b['closeAnimationActive'] = false;
        this.subTotalPrice += b.strikePrice;
        this.discount += b.discountPercentage;
        this.totalPrice += b.discountedPrice;
        return b;
      })
    }
    if(this.totalPrice>2000){
      this.shippingCharges = 0;
    }
    console.log("The bag items are", this.items);
  }

  selectSize() {
    console.log("this is selected eventhough disabled")
  }

  removeFromBag(id: any) {
    this.items = this.items.map((obj) => {
      if (obj.id === id) {
        obj['closeAnimationActive'] = true;
      }
      this.subTotalPrice += obj.strikePrice;
      this.discount += obj.discountPercentage;
      this.totalPrice += obj.discountedPrice;
      return obj
    })
    if(this.totalPrice>2000){
      this.shippingCharges = 0;
    } else {
      this.shippingCharges = 80;
    }
    setTimeout(() => {
      this.sharedService.removeItem(id);
      this.items = Object.values(this.sharedService.bagItems)
      if (this.items.length > 0) {
        this.items = this.items.map(obj => JSON.parse(obj))
      }
    }, 1000)


  }

  getOtp() {
    this.showSendOtp = false;
  }

}
