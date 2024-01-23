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
  showSendOtp:Boolean = true;
  constructor(public sharedService: SharedService) {
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.items = Object.values(this.sharedService.bagItems)
    if (this.items.length > 0) {
      this.items = this.items.map(obj => {
        let b = JSON.parse(obj)
        b['closeAnimationActive'] = false;
        return b;
      })
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
      return obj
    })
    setTimeout(() => {
      this.sharedService.removeItem(id);
      this.items = Object.values(this.sharedService.bagItems)
      if (this.items.length > 0) {
        this.items = this.items.map(obj => JSON.parse(obj))
      }
    }, 1000)


  }

  getOtp(){
    this.showSendOtp = false;
  }

}
